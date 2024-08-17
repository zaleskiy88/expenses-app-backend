const { IncomeSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//
const { Income } = IncomeSchemas;

const addIncome = async (req, res, next) => {
  const income = Income(req.body);

  await income.save();
  const incomes = await Income.find().sort({ createdAt: -1 });
  res.status(201).json(incomes);
};

module.exports = controllerWrapper(addIncome);
