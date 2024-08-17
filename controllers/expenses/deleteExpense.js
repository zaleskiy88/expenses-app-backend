const { ExpenseSchemas } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//
const { Expense } = ExpenseSchemas;

const deleteExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteExpense = await Expense.findByIdAndDelete(id);

    if (!deleteExpense) {
      throw HttpError(404, "Expense not found");
    }

    const expenses = await Expense.find().sort({ createdAt: -1 });
    return res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteExpense;
