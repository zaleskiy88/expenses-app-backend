const { ExpenseSchemas } = require("../../models/index");

const { Expense } = ExpenseSchemas;
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getExpenses;
