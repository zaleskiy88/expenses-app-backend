const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//
const { Expense, addExpenseSchema } = ExpenseSchemas;

const addExpense = async (req, res, next) => {
  const expense = Expense(req.body);
  const { error } = addExpenseSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error.message);
  }

  await expense.save();
  const expenses = await Expense.find().sort({ createdAt: -1 });
  res.status(201).json(expenses);
};

module.exports = controllerWrapper(addExpense);
