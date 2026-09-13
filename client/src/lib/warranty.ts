export type WarrantyProduct = {
  serial: string;
  productName: string;
  model: string;
  image: string;
  purchaseDate: string;
  warrantyExpiry: string;
  warrantyStatus: "Active" | "Expired";
  warrantyType: string;
  daysLeft: number;
};

export async function getWarranty(
  serial: string
): Promise<WarrantyProduct | null> {
  const cleanSerial = serial.trim().toUpperCase();

  const backendUrl =
    process.env.BACKEND_URL || "http://127.0.0.1:5000";

  const url =
    `${backendUrl}/api/v1/products/` +
    `${encodeURIComponent(cleanSerial)}`;

  console.log("Warranty API URL:", url);

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.json().catch(() => null);

    console.log(
      "Warranty API status:",
      response.status
    );

    console.log(
      "Warranty API response:",
      data
    );

    if (!response.ok) {
      return null;
    }

    const product = data?.data;

    if (!product) {
      return null;
    }

    const expiryDate = product.warrantyExpiry
      ? new Date(product.warrantyExpiry)
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
      serial:
        product.serialNumber || cleanSerial,

      productName:
        product.productName || "boAt Product",

      model:
        product.model || "Not Available",

      image:
        product.image ||
        "/products/earbuds.jpg",

      purchaseDate:
        product.purchaseDate || "Not Available",

      warrantyExpiry:
        product.warrantyExpiry || "Not Available",

      warrantyStatus:
        product.warrantyStatus ||
        (expiryDate && expiryDate >= now
          ? "Active"
          : "Expired"),

      warrantyType:
        product.warrantyType ||
        "Standard Warranty",

      daysLeft,
    };
  } catch (error) {
    console.error(
      "Warranty lookup failed:",
      error
    );

    return null;
  }
}