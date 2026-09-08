const prisma = require("../config/prisma");
const {
  createProductSchema,
} = require("../validators/product.validator");

// Create a new product
const createProduct = async (req, res) => {
  try {
    // Validate request body
    const result = createProductSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid product data",
          fields: result.error.flatten().fieldErrors,
        },
      });
    }

    const data = result.data;

    // Create product in PostgreSQL using Prisma
    const product = await prisma.product.create({
      data: {
        serialNumber: data.serialNumber,
        productName: data.productName,
        model: data.model,
        purchaseDate: data.purchaseDate,
        warrantyExpiry: data.warrantyExpiry,
        warrantyPdf: data.warrantyPdf || null,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    // Prisma unique constraint error
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        error: {
          code: "DUPLICATE_SERIAL_NUMBER",
          message: "Serial number already exists",
        },
      });
    }

    req.log.error(
      { err: error },
      "Create product failed"
    );

    return res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create product",
      },
    });
  }
};

// Get product by serial number
const getProductBySerialNumber = async (req, res) => {
  try {
    const serialNumber = String(
      req.params.serialNumber || ""
    ).trim();

    if (!serialNumber) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Serial number is required",
        },
      });
    }

    // Pagination values
    const page = Math.max(
      Number(req.query.page) || 1,
      1
    );

    const pageSize = Math.min(
      Math.max(
        Number(req.query.pageSize) || 10,
        1
      ),
      100
    );

    // Find product using Prisma
    const product = await prisma.product.findUnique({
      where: {
        serialNumber,
      },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        error: {
          code: "NOT_FOUND",
          message: "Serial number not found",
        },
      });
    }

    // Fetch repair history in parallel
    const [repairs, totalRepairs] =
      await Promise.all([
        prisma.repair.findMany({
          where: {
            productId: product.id,
          },
          orderBy: {
            repairDate: "desc",
          },
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),

        prisma.repair.count({
          where: {
            productId: product.id,
          },
        }),
      ]);

    // Warranty calculation
    const warrantyActive =
      new Date(product.warrantyExpiry) >=
      new Date();

    const totalPages =
      totalRepairs === 0
        ? 0
        : Math.ceil(
            totalRepairs / pageSize
          );

    return res.status(200).json({
      success: true,
      data: {
        id: product.id,
        serialNumber:
          product.serialNumber,
        productName:
          product.productName,
        model: product.model,
        purchaseDate:
          product.purchaseDate,
        warrantyExpiry:
          product.warrantyExpiry,
        warrantyStatus: warrantyActive
          ? "Active"
          : "Expired",
        warrantyPdf:
          product.warrantyPdf,

        repairs,

        pagination: {
          page,
          pageSize,
          total: totalRepairs,
          totalPages,
        },
      },
    });
  } catch (error) {
    req.log.error(
      { err: error },
      "Warranty lookup failed"
    );

    return res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to lookup warranty",
      },
    });
  }
};

module.exports = {
  createProduct,
  getProductBySerialNumber,
};