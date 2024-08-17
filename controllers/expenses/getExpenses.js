const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//

const { Expense } = ExpenseSchemas;
const getExpenses = async (req, res, next) => {
  const expenses = await Expense.find().sort({ createdAt: -1 });

  if (!expenses) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(expenses);
};

module.exports = controllerWrapper(getExpenses);
