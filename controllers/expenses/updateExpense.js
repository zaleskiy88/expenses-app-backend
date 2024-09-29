const { HttpError, controllerWrapper } = require("../../utils/index");
const { ExpenseSchemas } = require("../../models/index");

//  ==============================================  //

const { Expense } = ExpenseSchemas;

const updateExpense = async (req, res, next) => {
  const { _id: ownerId } = req.user;
  const { id } = req.params;

  const result = await Expense.findOneAndUpdate({ _id: id, owner: ownerId }, req.body, { new: true });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  await result.populate("owner", "_id name email");
  res.status(200).json(result);
};

module.exports = controllerWrapper(updateExpense);
