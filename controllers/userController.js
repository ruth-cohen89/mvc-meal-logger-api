const User = require("../models/UserModel");

// TODO: in all catch blocks replace the code with next(error)
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a specific user by ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ message: "Invalid or non-existent user ID" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a specific user by ID
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ message: "Invalid or non-existent user ID" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a specific user by ID
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ message: "Invalid or non-existent user ID" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
