const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const addExpense = async (req, res, next) => {
  const expense = Expense(req.body);

  await expense.save();
  const expenses = await Expense.find().sort({ createdAt: -1 });
  res.status(201).json(expenses);
};

module.exports = controllerWrapper(addExpense);
