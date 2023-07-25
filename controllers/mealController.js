const Meal = require("../models/mealModel");
const mongoose = require("mongoose");

exports.getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createMeal = async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    res.status(201).json(meal);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getMealById = async (req, res) => {
  try {
    const mealId = req.params.id;
    // Check if the mealId is a valid ObjectId
    // if (!mongoose.Types.ObjectId.isValid(mealId)) {
    //   return res.status(400).json({ error: "Invalid mealId format" });
    // }

    const meal = await Meal.findById({ _id: mealId });
    console.log("forme", meal);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.json(meal);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateMeal = async (req, res) => {
  try {
    const mealId = req.params.id;
    const updatedMeal = req.body;

    const meal = await Meal.findByIdAndUpdate(
      mealId,
      { $set: updatedMeal },
      { new: true }
    );

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.json(meal);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteMeal = async (req, res) => {
  try {
    const mealId = req.params.id;
    const meal = await Meal.findByIdAndRemove(mealId);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
