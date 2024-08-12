const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  value: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
