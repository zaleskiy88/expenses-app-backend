const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  =======================delete Expense============================//

const { Expense } = ExpenseSchemas;

const deleteExpense = async (req, res, next) => {
  const { _id: ownerId } = req.user;
  const { id } = req.params;

  const result = await Expense.findOneAndDelete({ _id: id, owner: ownerId });

  if (!result) {
    throw HttpError(404, "Expense not found");
  }

  const expenses = await Expense.find({ owner: ownerId })
    .sort({
      createdAt: -1,
    })
    .populate("owner", "_id name email");
  return res.status(200).json(expenses);
};

module.exports = controllerWrapper(deleteExpense);
