const { IncomeSchemas } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//
const { Income, addIncomeSchema } = IncomeSchemas;

const addIncome = async (req, res, next) => {
  const income = Income(req.body);

  ///Validatons///
  try {
    const { error } = addIncomeSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    await income.save();
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(201).json(incomes);
  } catch (error) {
    next(error);
  }
};

module.exports = addIncome;
