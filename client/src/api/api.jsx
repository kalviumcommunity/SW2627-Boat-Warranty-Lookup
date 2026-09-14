const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "http://localhost:5000/api/v1";

export const apiRequest = async (
  endpoint,
  options = {},
  token = null
) => {
  const headers = {
    ...(options.body instanceof FormData
      ? {}
      : {
          "Content-Type": "application/json",
        }),
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers,
    }
  );

  const data = await response
    .json()
    .catch(() => null);

  if (!response.ok) {
    const error = new Error(
      data?.error?.message ||
        data?.message ||
        "Request failed"
    );

    error.status = response.status;
    error.code = data?.error?.code;

    throw error;
  }

  return data;
};