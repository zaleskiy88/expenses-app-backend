const mongoose = require("mongoose");

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

const Income = mongoose.model("Income", IncomeSchema);

module.exports = { Income };
