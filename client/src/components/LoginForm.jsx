"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    const response = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    router.push("/account");
  }

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) =>
          setEmail(event.target.value)
        }
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) =>
          setPassword(event.target.value)
        }
        required
      />

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      <button
        className="button"
        type="submit"
      >
        Login
      </button>

    </form>
  );
}

export default LoginForm;