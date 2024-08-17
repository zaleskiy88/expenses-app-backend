const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const deleteExpense = async (req, res, next) => {
  const { id } = req.params;
  const deleteExpense = await Expense.findByIdAndDelete(id);

  if (!deleteExpense) {
    throw HttpError(404, "Expense not found");
  }

  const expenses = await Expense.find().sort({ createdAt: -1 });
  return res.status(200).json(expenses);
};

module.exports = controllerWrapper(deleteExpense);
