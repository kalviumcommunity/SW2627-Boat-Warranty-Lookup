const express = require("express");

const {
  createProduct,
  getProductBySerialNumber,
} = require("../controllers/product.controller");

const {
  authenticate,
  authorizeRoles,
} = require("../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeRoles("admin"),
  createProduct
);

router.get(
  "/:serialNumber",
  getProductBySerialNumber
);

module.exports = router;