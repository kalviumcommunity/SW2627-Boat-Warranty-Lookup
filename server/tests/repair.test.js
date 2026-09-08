const request = require("supertest");

const app = require("../src/app");
const prisma = require("../src/config/prisma");

describe("Repair API", () => {
  let adminToken;
  let customerToken;
  let productId;

  beforeAll(async () => {
    const adminLogin =
      await request(app)
        .post("/api/v1/auth/login")
        .send({
          email: "admin@test.com",
          password: "admin123",
        });

    adminToken =
      adminLogin.body.data.token;

    const customerLogin =
      await request(app)
        .post("/api/v1/auth/login")
        .send({
          email: "customer@test.com",
          password: "customer123",
        });

    customerToken =
      customerLogin.body.data.token;

    let product =
      await prisma.product.findUnique({
        where: {
          serialNumber:
            "TEST-ADMIN-001",
        },
      });

    if (!product) {
      product =
        await prisma.product.create({
          data: {
            serialNumber:
              "TEST-ADMIN-001",
            productName:
              "Boat Test Speaker",
            model: "TS-100",
            purchaseDate:
              new Date("2026-01-01"),
            warrantyExpiry:
              new Date("2027-01-01"),
          },
        });
    }

    productId = product.id;

    await prisma.repair.deleteMany({
      where: {
        productId,
      },
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("customer cannot create repair", async () => {
    const response =
      await request(app)
        .post("/api/v1/repairs")
        .set(
          "Authorization",
          `Bearer ${customerToken}`
        )
        .send({
          productId,
          repairDate:
            "2026-08-20",
          issue:
            "Speaker problem",
          description:
            "Test repair",
          status: "Pending",
          cost: 500,
        });

    expect(response.statusCode)
      .toBe(403);
  });

  test("admin can create repair", async () => {
    const response =
      await request(app)
        .post("/api/v1/repairs")
        .set(
          "Authorization",
          `Bearer ${adminToken}`
        )
        .send({
          productId,
          repairDate:
            "2026-08-20",
          issue:
            "Speaker problem",
          description:
            "Test repair",
          status: "Pending",
          cost: 500,
        });

    expect(response.statusCode)
      .toBe(201);
  });

  test("admin can create another repair", async () => {
    const response =
      await request(app)
        .post("/api/v1/repairs")
        .set(
          "Authorization",
          `Bearer ${adminToken}`
        )
        .send({
          productId,
          repairDate:
            "2026-08-25",
          issue:
            "Charging problem",
          description:
            "Test charging repair",
          status: "Completed",
          cost: 300,
        });

    expect(response.statusCode)
      .toBe(201);
  });

  test("repair history supports pagination", async () => {
    const response =
      await request(app)
        .get(
          `/api/v1/repairs/product/${productId}?page=1&pageSize=1`
        );

    expect(response.statusCode)
      .toBe(200);

    expect(
      response.body.data.pagination.page
    ).toBe(1);

    expect(
      response.body.data.pagination.pageSize
    ).toBe(1);

    expect(
      response.body.data.pagination.total
    ).toBeGreaterThanOrEqual(2);

    expect(
      response.body.data.pagination
        .totalPages
    ).toBeGreaterThanOrEqual(2);

    expect(
      response.body.data.repairs.length
    ).toBe(1);
  });
});