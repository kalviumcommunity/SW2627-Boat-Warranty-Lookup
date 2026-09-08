const request = require("supertest");

const app = require("../src/app");
const prisma = require("../src/config/prisma");

describe("Product API", () => {
  let adminToken;
  let customerToken;
  let productId;
  let serialNumber;

  beforeAll(async () => {
    const adminLogin = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "admin@test.com",
        password: "admin123",
      });

    adminToken = adminLogin.body.data.token;

    const customerLogin = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "customer@test.com",
        password: "customer123",
      });

    customerToken = customerLogin.body.data.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("customer cannot create product", async () => {
    const response = await request(app)
      .post("/api/v1/products")
      .set(
        "Authorization",
        `Bearer ${customerToken}`
      )
      .send({
        serialNumber: `TEST-CUSTOMER-${Date.now()}`,
        productName: "Test Product",
        model: "TP-1",
        purchaseDate: "2026-01-01",
        warrantyExpiry: "2027-01-01",
      });

    expect(response.statusCode).toBe(403);

    expect(response.body.error.code).toBe(
      "FORBIDDEN"
    );
  });

  test("admin can create product", async () => {
    serialNumber = `TEST-ADMIN-${Date.now()}`;

    const response = await request(app)
      .post("/api/v1/products")
      .set(
        "Authorization",
        `Bearer ${adminToken}`
      )
      .send({
        serialNumber,
        productName: "Boat Test Speaker",
        model: "TS-100",
        purchaseDate: "2026-01-01",
        warrantyExpiry: "2027-01-01",
      });

    expect(response.statusCode).toBe(201);

    expect(
      response.body.data.serialNumber
    ).toBe(serialNumber);

    productId = response.body.data.id;

    expect(productId).toBeDefined();
  });

  test("public warranty lookup works", async () => {
    const response = await request(app)
      .get(
        `/api/v1/products/${serialNumber}`
      );

    expect(response.statusCode).toBe(200);

    expect(
      response.body.data.serialNumber
    ).toBe(serialNumber);
  });

  test("unknown serial number returns 404", async () => {
    const response = await request(app)
      .get(
        "/api/v1/products/DOES-NOT-EXIST"
      );

    expect(response.statusCode).toBe(404);

    expect(
      response.body.error.code
    ).toBe("NOT_FOUND");
  });
});