const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const pinoHttp = require("pino-http");

const logger = require("./config/logger");

const healthRoutes = require("./routes/health.routes");
const productRoutes = require("./routes/product.routes");
const repairRoutes = require("./routes/repair.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Security headers
app.use(helmet());

// CORS
app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:5173",
    credentials: true,
  })
);

// HTTP request logging
app.use(
  pinoHttp({
    logger,
  })
);

// JSON body parser
app.use(express.json());

// API routes
app.use(
  "/api/v1/health",
  healthRoutes
);

app.use(
  "/api/v1/products",
  productRoutes
);

app.use(
  "/api/v1/repairs",
  repairRoutes
);

app.use(
  "/api/v1/auth",
  authRoutes
);

// Unknown route
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "Route not found",
    },
  });
});

module.exports = app;