const express = require("express");

const {
  createFeedback,
  getFeedback,
} = require("../controllers/feedback.controller");

const {
  authenticate,
  authorizeRoles,
} = require("../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/",
  authenticate,
  createFeedback
);

router.get(
  "/",
  authenticate,
  authorizeRoles("admin"),
  getFeedback
);

module.exports = router;