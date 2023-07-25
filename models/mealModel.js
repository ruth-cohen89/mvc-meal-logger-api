const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please choose a name"],
  },
  time: Number,
  description: String,
  day: {
    type: String,
    enum: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wedensday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
});

// creating a Mongoose model named Meal based on the defined schema.
// This model allows to perform CRUD operations on the Meal collection in MongoDB.
const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
