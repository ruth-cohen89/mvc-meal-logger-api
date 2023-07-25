const express = require("express");
const userRouter = require("./routes/userRoutes");
const mealRouter = require("./routes/mealRoutes");

const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

app.use("/api/v1/meals", mealRouter);

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  const error = new Error(`Cannot find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
