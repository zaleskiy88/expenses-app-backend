const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  value: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("Category", CategorySchema);
