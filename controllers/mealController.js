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
    const meal = await Meal.findById(mealId);

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.json(meal);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ message: "Invalid or non-existent meal ID" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateMeal = async (req, res) => {
  try {
    const mealId = req.params.id;
    const updatedMeal = req.body;

    const meal = await Meal.findByIdAndUpdate(
      mealId,
      // only the fields specified in the updatedMeal object will be updated,
      // and any other fields in the document will remain unchanged.
      // set operator sets the fields of the document to the values specified
      { $set: updatedMeal },

      // return the updated document after the update has been applied (and not the older)
      { new: true }
    );

    if (!meal) {
      return res.status(404).json({ error: "Meal not found" });
    }

    res.json(meal);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ message: "Invalid or non-existent meal ID" });
    }
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
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res
        .status(404)
        .json({ message: "Invalid or non-existent meal ID" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
