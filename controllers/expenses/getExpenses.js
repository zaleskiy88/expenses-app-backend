const { ExpenseSchemas } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//

const { Expense } = ExpenseSchemas;
const getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });

    if (!expenses) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
};

module.exports = getExpenses;
