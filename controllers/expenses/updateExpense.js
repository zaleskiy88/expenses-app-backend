const { HttpError, controllerWrapper } = require("../../utils/index");
const { ExpenseSchemas } = require("../../models/index");

//  ====================update Expense==========================  //

const { Expense } = ExpenseSchemas;

const updateExpense = async (req, res, next) => {
  const { _id: ownerId } = req.user;
  const { id } = req.params;

  const result = await Expense.findOneAndUpdate(
    { _id: id, owner: ownerId },
    req.body,
    { new: true }
  );

  if (!result) {
    throw HttpError(404, "Not found");
  }

  const expenses = await Expense.find({ owner: ownerId })
    .sort({
      createdAt: -1,
    })
    .populate("owner", "_id name email");
  res.status(200).json(expenses);
};

module.exports = controllerWrapper(updateExpense);
