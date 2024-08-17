const { IncomeSchemas } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//
const { Income } = IncomeSchemas;
const getIncomes = async (req, res, next) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });

    if (!incomes) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(incomes);
  } catch (error) {
    next(error);
  }
};

module.exports = getIncomes;
