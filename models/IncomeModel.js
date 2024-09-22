const mongoose = require("mongoose");
const Joi = require("joi");
const { mongooseErrorHandler } = require("../utils/index");

//  ================Mongoose Schema===================================  //
const IncomeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxLength: 50 },
    amount: { type: Number, required: true, trim: true, maxLength: 20 },
    type: { type: String, default: "incomes" },
    date: { type: Date, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

//Schema error handling
IncomeSchema.post("save", mongooseErrorHandler);

const Income = mongoose.model("Income", IncomeSchema);

//  ================Joi Schema===================================  //

const addIncomeSchema = Joi.object({
  title: Joi.string().required(),
  amount: Joi.number().positive().required(),
  date: Joi.date().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = { Income, addIncomeSchema };
