const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");

//  ===================================================//

const { Expense } = ExpenseSchemas;

const getExpenses = async (req, res, next) => {
  const { _id: owner } = req.user;
  const expenses = await Expense.find({ owner }).sort({ createdAt: -1 });

  if (!expenses) {
    next(HttpError(404, "Not found"));
  }

  res.status(200).json(expenses);
};

module.exports = controllerWrapper(getExpenses);
