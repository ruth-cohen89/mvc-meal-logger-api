const Meal = require('../models/mealModel');


exports.getAllMeals = async (req, res) => {
    try {
      const meals = await Meal.find();
      res.json(meals);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.createMeal = async (req, res) => {
    try {
      const { name, description } = req.body;
      const meal = await Meal.create({ name, description });
      res.status(201).json(meal);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

