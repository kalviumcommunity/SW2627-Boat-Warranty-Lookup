import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      mobile,
      email,
      password,
    } = body;

    if (!mobile || !email || !password) {
      return NextResponse.json(
        {
          message:
            "Mobile number, email and password are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json(
        {
          message: "Invalid mobile number.",
        },
        {
          status: 400,
        }
      );
    }

    const response = NextResponse.json({
      success: true,
      user: {
        mobile,
        email,
      },
    });

    response.cookies.set(
      "boat_session",
      "authenticated",
      {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      }
    );

    return response;
  } catch {
    return NextResponse.json(
      {
        message: "Invalid request.",
      },
      {
        status: 400,
      }
    );
  }
}