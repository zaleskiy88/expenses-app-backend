const { ExpenseSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");

//  ===================================================//

const { Expense } = ExpenseSchemas;

const addExpense = async (req, res, next) => {
  const { _id: owner } = req.user;
  const expense = Expense({ ...req.body, owner });

  const result = await expense.save();
  await expense.populate("owner", "_id name email");

  res.status(201).json(result);
};

module.exports = controllerWrapper(addExpense);
