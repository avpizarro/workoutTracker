const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
      type: Date,
      default: Date.now
    },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        distance: Number
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
