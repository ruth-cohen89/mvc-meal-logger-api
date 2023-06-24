const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'Please choose a name.',
    ],
  },
  time: Number,
  day: {
    type: String,
    required: [true, 'Choose a day.'],
    enum: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wedensday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  }
});
    
const Meal = mongoose.model('Meal', mealSchema);
module.exports = Meal;


