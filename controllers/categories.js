const CategorySchema = require("../models/CategoryModel");

const getCategories = async (req, res) => {
  try {
    const categories = await CategorySchema.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCategories };
