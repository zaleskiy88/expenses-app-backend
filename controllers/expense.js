const ExpenseSchema = require("../models/ExpenseModel");
const addExpense = async (req, res) => {
  const { title, amount, date, category, description } = req.body;

  const expense = ExpenseSchema({
    title,
    amount,
    description,
    category,
    date,
  });

  ///Validatons///
  try {
    if (!title || !date || !category || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    ////////////////

    await expense.save();
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteExpense = await ExpenseSchema.findByIdAndDelete(id);

    if (!deleteExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    return res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addExpense, getExpenses, deleteExpense };
