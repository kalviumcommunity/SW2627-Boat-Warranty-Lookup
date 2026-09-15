const prisma = require("../config/prisma");
const { feedbackSchema } = require("../validators/feedback.validator");

const createFeedback = async (req, res) => {
  try {
    const result = feedbackSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid feedback data",
          fields: result.error.flatten().fieldErrors,
        },
      });
    }

    const feedback = await prisma.feedback.create({
      data: {
        userId: req.user.id,
        rating: result.data.rating,
        message: result.data.message,
      },
      select: {
        id: true,
        rating: true,
        message: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });
  } catch (error) {
    console.error("Create feedback error:", error);

    return res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to submit feedback",
      },
    });
  }
};

const getFeedback = async (req, res) => {
  try {
    const page = Math.max(
      1,
      Number.parseInt(req.query.page, 10) || 1
    );

    const pageSize = Math.min(
      50,
      Math.max(
        1,
        Number.parseInt(req.query.pageSize, 10) || 10
      )
    );

    const skip = (page - 1) * pageSize;

    const [feedback, total] = await Promise.all([
      prisma.feedback.findMany({
        skip,
        take: pageSize,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          rating: true,
          message: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),

      prisma.feedback.count(),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        feedback,
        pagination: {
          page,
          pageSize,
          total,
          totalPages: Math.ceil(total / pageSize),
        },
      },
    });
  } catch (error) {
    console.error("Get feedback error:", error);

    return res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch feedback",
      },
    });
  }
};

module.exports = {
  createFeedback,
  getFeedback,
};