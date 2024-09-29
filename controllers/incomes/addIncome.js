const { IncomeSchemas } = require("../../models/index");
const { controllerWrapper } = require("../../utils/index");
//  ===================================================//

const { Income } = IncomeSchemas;

const addIncome = async (req, res, next) => {
  const { _id: owner } = req.user;
  const income = Income({ ...req.body, owner });

  await income.save();
  const incomes = await Income.find({ owner }).sort({ createdAt: -1 });
  res.status(201).json(incomes);
};

module.exports = controllerWrapper(addIncome);
