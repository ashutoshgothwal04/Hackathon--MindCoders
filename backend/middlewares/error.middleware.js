export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error for development
  console.error(err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    error = {
      statusCode: 400,
      message: messages,
    };
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = {
      statusCode: 400,
      message: `Duplicate field value entered for ${field}. Please use another value`,
    };
  }

  // Mongoose cast error
  if (err.name === "CastError") {
    error = {
      statusCode: 400,
      message: `Resource not found with id of ${err.value}`,
    };
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    error = {
      statusCode: 401,
      message: "Not authorized to access this route",
    };
  }

  if (err.name === "TokenExpiredError") {
    error = {
      statusCode: 401,
      message: "Token expired, please login again",
    };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};
