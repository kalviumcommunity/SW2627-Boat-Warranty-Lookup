const request = require("supertest");

const app = require("../src/app");

describe("Health API", () => {
  test("GET /api/v1/health returns 200", async () => {
    const response = await request(app)
      .get("/api/v1/health");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
      })
    );
  });
});