const { HttpError } = require("../../utils/index");
const { ExpenseSchemas } = require("../../models/index");
//  ==============================================  //

const { Expense, addExpenseSchema } = ExpenseSchemas;
const updateExpense = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { error } = addExpenseSchema.validate(req.body);

    if (error) {
      throw (HttpError(400), error.message);
    }
    const result = await Expense.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!result) {
      throw (HttpError(400), "Not found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateExpense;
