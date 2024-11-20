const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  userIdCounter: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Counter", counterSchema);
