const prisma = require("../config/prisma");
const {
  createRepairSchema,
} = require("../validators/repair.validator");

// Create a new repair
const createRepair = async (req, res) => {
  try {
    const result = createRepairSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid repair data",
          fields: result.error.flatten().fieldErrors,
        },
      });
    }

    const data = result.data;

    const product = await prisma.product.findUnique({
      where: {
        id: data.productId,
      },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        error: {
          code: "PRODUCT_NOT_FOUND",
          message: "Product not found",
        },
      });
    }

    const repair = await prisma.repair.create({
      data: {
        productId: data.productId,
        repairDate: data.repairDate,
        issue: data.issue,
        description: data.description,
        status: data.status,
        cost: data.cost,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Repair created successfully",
      data: repair,
    });
  } catch (error) {
    req.log.error(
      { err: error },
      "Create repair failed"
    );

    return res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create repair",
      },
    });
  }
};

// Get repairs by product ID
const getRepairsByProductId = async (req, res) => {
  try {
    const productId = Number(
      req.params.productId
    );

    if (
      !Number.isInteger(productId) ||
      productId <= 0
    ) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid product ID",
        },
      });
    }

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

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        id: true,
        serialNumber: true,
        productName: true,
        model: true,
      },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        error: {
          code: "PRODUCT_NOT_FOUND",
          message: "Product not found",
        },
      });
    }

    const where = {
      productId,
    };

    const [repairs, total] = await Promise.all([
      prisma.repair.findMany({
        where,
        orderBy: {
          repairDate: "desc",
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),

      prisma.repair.count({
        where,
      }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        product,
        repairs,
        pagination: {
          page,
          pageSize,
          total,
          totalPages:
            total === 0
              ? 0
              : Math.ceil(
                  total / pageSize
                ),
        },
      },
    });
  } catch (error) {
    req.log.error(
      { err: error },
      "Get repairs failed"
    );

    return res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch repairs",
      },
    });
  }
};

module.exports = {
  createRepair,
  getRepairsByProductId,
};