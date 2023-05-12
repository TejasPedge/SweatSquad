const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: String | Number, required: true },
    gender: { type: String, required: true },
    primaryGoal: { type: String, required: true },
    typicalDay: { type: String, required: true },
    currentWeight: { type: String| Number, required: true },
    PHeight: { type: String| Number, required: true },
    goalWeight: { type: String| Number, required: true },
  },
  {
    versionKey: false,
  }
);

const userModel = model("users", userSchema);

module.exports = { userModel };
