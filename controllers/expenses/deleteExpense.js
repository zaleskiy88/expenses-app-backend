const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const deleteExpense = async (req, res, next) => {
  const { _id: ownerId } = req.user;
  const { id } = req.params;

  const result = await Expense.findOneAndDelete({ _id: id, owner: ownerId });

  if (!result) {
    throw HttpError(404, "Expense not found");
  }

  await result.populate("owner", "_id name email");
  return res.status(200).json(result);
};

module.exports = controllerWrapper(deleteExpense);
