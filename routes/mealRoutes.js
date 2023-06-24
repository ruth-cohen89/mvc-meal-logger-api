const express = require('express');
const mealController = require('../controllers/mealController');

const router = express.Router();

router.route('/')
.post(mealController.createMeal)
.get(mealController.getAllMeals)

// router.route('/:id')
// .get(mealController.getMealById)
// .patch(mealController.updateMealById)
// .delete(mealController.deleteMeal);

module.exports = router;