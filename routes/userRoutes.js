const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", userController.createUser); // Create a new user
userRouter.get("/", userController.getAllUsers); // Get all users

userRouter.get("/:id", userController.getUserById); // Get a specific user by ID
userRouter.put("/:id", userController.updateUser); // Update a specific user by ID
userRouter.delete("/:id", userController.deleteUser); // Delete a specific user by ID

module.exports = userRouter;
