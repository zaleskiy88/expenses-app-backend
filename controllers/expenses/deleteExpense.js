const { ExpenseSchemas } = require("../../models/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteExpense = await Expense.findByIdAndDelete(id);

    if (!deleteExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const expenses = await Expense.find().sort({ createdAt: -1 });
    return res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = deleteExpense;
