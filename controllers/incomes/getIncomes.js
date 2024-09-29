const { IncomeSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//

const { Income } = IncomeSchemas;

const getIncomes = async (req, res, next) => {
  const { _id: owner } = req.user;
  const incomes = await Income.find({ owner }).sort({ createdAt: -1 });

  if (!incomes) {
    next(HttpError(404, "Not found"));
  }

  res.status(200).json(incomes);
};

module.exports = controllerWrapper(getIncomes);
