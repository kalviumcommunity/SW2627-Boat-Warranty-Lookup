const { z } = require("zod");

const feedbackSchema = z.object({
  rating: z
    .number({
      error: "Rating is required",
    })
    .int("Rating must be an integer")
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5"),

  message: z
    .string({
      error: "Feedback message is required",
    })
    .trim()
    .min(5, "Feedback must be at least 5 characters")
    .max(
      1000,
      "Feedback must not exceed 1000 characters"
    ),
});

module.exports = {
  feedbackSchema,
};