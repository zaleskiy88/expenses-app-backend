const mongoose = require("mongoose");
const { mongooseErrorHandler } = require("../utils/index");

//  ================Mongoose Schema===================================  //
const CategorySchema = new mongoose.Schema({
  value: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
});

//Schema error handling
CategorySchema.post("save", mongooseErrorHandler);

const Category = mongoose.model("Category", CategorySchema);
//  ===================================================================  //

module.exports = Category;
