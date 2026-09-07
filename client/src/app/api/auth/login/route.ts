import { cookies } from "next/headers";

export async function POST(
  request: Request
) {
  const body =
    await request.json();

  if (
    body.email !==
      "admin@boat.local" ||
    body.password !==
      "admin123"
  ) {
    return Response.json(
      {
        message:
          "Invalid email or password."
      },
      {
        status: 401
      }
    );
  }

  const cookieStore =
    await cookies();

  cookieStore.set(
    "session",
    "admin",
    {
      httpOnly: true,
      sameSite: "lax",
      secure:
        process.env.NODE_ENV ===
        "production",
      path: "/"
    }
  );

  return Response.json({
    success: true
  });
}