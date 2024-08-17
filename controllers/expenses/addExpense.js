const { ExpenseSchemas } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const addExpense = async (req, res, next) => {
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
      throw HttpError(400, "All fields are required");
    }

    if (amount <= 0 || !amount === "number") {
      throw HttpError(400, "Amount must be a positive number");
    }
    ////////////////

    await expense.save();
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(201).json(expenses);
  } catch (error) {
    next(error);
  }
};

module.exports = addExpense;
