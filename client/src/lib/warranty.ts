export type WarrantyRepair = {
  id: number | string;
  issue: string;
  description?: string | null;
  status?: string | null;
  cost?: number | string | null;
  repairDate?: string | null;
};

export type WarrantyPagination = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type WarrantyProduct = {
  id: number | string;

  serial: string;
  productName: string;
  model: string;

  image: string;

  purchaseDate: string;
  warrantyExpiry: string;

  warrantyStatus: "Active" | "Expired";

  warrantyType: string;
  daysLeft: number;

  repairs: WarrantyRepair[];
  pagination: WarrantyPagination;
};

export type WarrantyLookupResult =
  | {
      status: "OK";
      data: WarrantyProduct;
    }
  | {
      status: "NOT_FOUND";
    }
  | {
      status: "ERROR";
      message: string;
    };

export async function getWarranty(
  serial: string
): Promise<WarrantyLookupResult> {
  const cleanSerial = serial
    .trim()
    .toUpperCase();

  const backendUrl =
    process.env.BACKEND_URL ||
    "http://localhost:5000";

  const url =
    `${backendUrl}/api/v1/products/` +
    `${encodeURIComponent(cleanSerial)}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response
      .json()
      .catch(() => null);

    if (response.status === 404) {
      return {
        status: "NOT_FOUND",
      };
    }

    if (!response.ok) {
      return {
        status: "ERROR",
        message:
          data?.error?.message ||
          "Warranty service returned an error.",
      };
    }

    const product = data?.data;

    if (!product) {
      return {
        status: "ERROR",
        message:
          "Invalid warranty response.",
      };
    }

    const expiryDate =
      product.warrantyExpiry
        ? new Date(
            product.warrantyExpiry
          )
        : null;

    const now = new Date();

    const daysLeft = expiryDate
      ? Math.max(
          0,
          Math.ceil(
            (expiryDate.getTime() -
              now.getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

    return {
      status: "OK",
      data: {
        id: product.id,

        serial:
          product.serialNumber ||
          cleanSerial,

        productName:
          product.productName ||
          "boAt Product",

        model:
          product.model ||
          "Not Available",

        image:
          product.image ||
          "/products/earbuds.jpg",

        purchaseDate:
          product.purchaseDate ||
          "Not Available",

        warrantyExpiry:
          product.warrantyExpiry ||
          "Not Available",

        warrantyStatus:
          product.warrantyStatus ===
          "Active"
            ? "Active"
            : "Expired",

        warrantyType:
          product.warrantyType ||
          "Standard Warranty",

        daysLeft,

        repairs:
          Array.isArray(
            product.repairs
          )
            ? product.repairs
            : [],

        pagination:
          product.pagination || {
            page: 1,
            pageSize: 10,
            total: 0,
            totalPages: 0,
          },
      },
    };
  } catch (error) {
    console.error(
      "Warranty lookup failed:",
      error
    );

    return {
      status: "ERROR",
      message:
        "Unable to connect to the warranty service.",
    };
  }
}