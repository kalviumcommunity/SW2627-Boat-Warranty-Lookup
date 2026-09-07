const bcrypt = require("bcryptjs");

const prisma = require("../src/config/prisma");

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: {
      email: "admin@boatwarranty.com",
    },
    update: {
      role: "admin",
      password,
    },
    create: {
      name: "Admin",
      email: "admin@boatwarranty.com",
      password,
      role: "admin",
    },
  });

  console.log("Admin user ready");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });