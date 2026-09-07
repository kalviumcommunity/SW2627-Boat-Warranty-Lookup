const express = require("express");

const {
  createRepair,
  getRepairsByProductId,
} = require("../controllers/repair.controller");

const {
  authenticate,
  authorizeRoles,
} = require("../middleware/auth.middleware");

const router = express.Router();

// Admin only
router.post(
  "/",
  authenticate,
  authorizeRoles("admin"),
  createRepair
);

// Public repair history lookup
router.get(
  "/product/:productId",
  getRepairsByProductId
);

module.exports = router;