const errorHandler = (err, req, res, next) => {
  // Handle validation errors (e.g., mongoose ValidationError)
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }

  // Handle CastError with kind "ObjectId"
  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(404).json({ error: "Invalid or non-existent ID" });
  }

  // Handle other errors (500 Internal Server Error)
  console.error(err); // Log the error for debugging purposes
  res.status(500).json({ error: "Internal server error" });
};
module.exports = errorHandler;
