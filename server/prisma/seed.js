require("dotenv").config();

const bcrypt = require("bcryptjs");
const prisma = require("../src/config/prisma");

const main = async () => {
  const adminPassword =
    process.env.ADMIN_SEED_PASSWORD;

  if (!adminPassword) {
    throw new Error(
      "ADMIN_SEED_PASSWORD is not configured"
    );
  }

  const hashedPassword =
    await bcrypt.hash(adminPassword, 10);

  const admin =
    await prisma.user.upsert({
      where: {
        email: "admin@boatwarranty.com",
      },
      update: {
        password: hashedPassword,
        role: "admin",
      },
      create: {
        name: "Boat Warranty Admin",
        email: "admin@boatwarranty.com",
        password: hashedPassword,
        role: "admin",
      },
    });

  console.log(
    `Admin user ready: ${admin.email}`
  );
};

main()
  .catch((error) => {
    console.error(
      "Seed error:",
      error
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });