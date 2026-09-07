export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    if (
      !body.serial ||
      !body.name ||
      !body.email ||
      !body.phone ||
      !body.issueType
    ) {
      return Response.json(
        {
          message:
            "Please fill all required fields."
        },
        {
          status: 400
        }
      );
    }

    const claimId =
      "CLM-" +
      Date.now();

    return Response.json({
      success: true,
      claimId
    });

  } catch {
    return Response.json(
      {
        message:
          "Unable to submit claim."
      },
      {
        status: 500
      }
    );
  }
}