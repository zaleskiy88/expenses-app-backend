const { IncomeSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//

const { Income } = IncomeSchemas;

const getIncomes = async (req, res, next) => {
  const incomes = await Income.find().sort({ createdAt: -1 });

  if (!incomes) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(incomes);
};

module.exports = controllerWrapper(getIncomes);
