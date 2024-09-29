const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const addExpense = async (req, res, next) => {
  const { _id: owner } = req.user;
  const expense = Expense({ ...req.body, owner });

  await expense.save();
  const expenses = await Expense.find({ owner }).sort({ createdAt: -1 });
  res.status(201).json(expenses);
};

module.exports = controllerWrapper(addExpense);
