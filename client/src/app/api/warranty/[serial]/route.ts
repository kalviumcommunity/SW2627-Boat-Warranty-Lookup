import { getWarranty } from "@/lib/warranty";

export async function GET(
  request: Request,
  {
    params
  }: {
    params: Promise<{
      serial: string;
    }>;
  }
) {
  const { serial } = await params;

  const product =
    await getWarranty(serial);

  if (!product) {
    return Response.json(
      {
        success: false,
        message: "Product not found"
      },
      {
        status: 404
      }
    );
  }

  return Response.json({
    success: true,
    data: product
  });
}