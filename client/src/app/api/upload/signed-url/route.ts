export async function POST(
  request: Request
) {
  const body =
    await request.json();

  const backendUrl =
    process.env.BACKEND_URL;

  if (!backendUrl) {
    return Response.json(
      {
        message:
          "Backend URL is not configured."
      },
      {
        status: 500
      }
    );
  }

  const response = await fetch(
    `${backendUrl}/api/uploads/signed-url`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({
        filename: body.filename,
        contentType:
          body.contentType
      })
    }
  );

  const data =
    await response.json();

  return Response.json(
    data,
    {
      status: response.status
    }
  );
}