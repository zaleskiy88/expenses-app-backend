const mongoose = require("mongoose");
const Joi = require("joi");
const { mongooseErrorHandler } = require("../utils/index");

//  ================Mongoose Schema===================================  //
const ExpenseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxLength: 50 },
    amount: { type: Number, required: true, trim: true, maxLength: 20 },
    type: { type: String, default: "expenses" },
    date: { type: Date, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

//Schema error handling
ExpenseSchema.post("save", mongooseErrorHandler);

const Expense = mongoose.model("Expense", ExpenseSchema);

//  ================Joi Schema===================================  //

const addExpenseSchema = Joi.object({
  title: Joi.string().required(),
  amount: Joi.number().positive().required(),
  date: Joi.date().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = { Expense, addExpenseSchema };
