const { ExpenseSchemas } = require("../../models/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const addExpense = async (req, res) => {
  const { title, amount, date, category, description } = req.body;

  const expense = Expense({
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
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(201).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = addExpense;
