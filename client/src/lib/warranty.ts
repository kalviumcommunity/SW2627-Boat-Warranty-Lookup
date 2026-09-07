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

  const backendUrl =
    process.env.BACKEND_URL;

  if (backendUrl) {
    try {
      const response = await fetch(
        `${backendUrl}/api/products/${serial}`,
        {
          cache: "no-store",
        }
      );

      if (response.ok) {
        const data =
          await response.json();

        const product =
          data.product ||
          data.data;

        if (product) {
          return {
            serial:
              product.serialNumber ||
              product.serial ||
              serial,

            productName:
              product.productName ||
              product.name ||
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
              product.warrantyTill ||
              "Not Available",

            warrantyStatus:
              product.warrantyStatus ||
              "Active",

            warrantyType:
              product.warrantyType ||
              "Standard Warranty",

            daysLeft:
              Number(product.daysLeft) || 0,
          };
        }
      }
    } catch (error) {
      console.log(
        "Backend is not available."
      );
    }
  }

  // Demo data for frontend testing
  if (
    process.env.DEMO_MODE === "true" &&
    serial === "BOAT1234ABC"
  ) {
    return {
      serial: "BOAT1234ABC",

      productName:
        "boAt Airdopes 141",

      model:
        "Airdopes 141",

      image:
        "/products/earbuds.jpg",

      purchaseDate:
        "15 Jan 2024",

      warrantyExpiry:
        "15 Jan 2026",

      warrantyStatus:
        "Active",

      warrantyType:
        "Standard Warranty",

      daysLeft: 245,
    };
  }

  return null;
}