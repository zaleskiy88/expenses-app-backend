const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");

//  ======================get Expenses=============================//

const { Expense } = ExpenseSchemas;

const getExpenses = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const { _id: owner } = req.user;
  const skip = (page - 1) * limit;

  const expenses = await Expense.find({ owner }, null, { skip, limit })
    .sort({
      createdAt: -1,
    })
    .populate("owner", "_id name email");

  if (!expenses) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(expenses);
};

module.exports = controllerWrapper(getExpenses);
