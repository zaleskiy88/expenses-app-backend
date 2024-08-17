const { HttpError, controllerWrapper } = require("../../utils/index");
const { ExpenseSchemas } = require("../../models/index");
//  ==============================================  //

const { Expense, addExpenseSchema } = ExpenseSchemas;
const updateExpense = async (req, res, next) => {
  const { id } = req.params;

  const result = await Expense.findOneAndUpdate({ _id: id }, req.body, { new: true });

  if (!result) {
    throw (HttpError(400), "Not found");
  }

  res.status(200).json(result);
};

module.exports = controllerWrapper(updateExpense);
