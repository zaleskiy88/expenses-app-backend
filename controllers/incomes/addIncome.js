const { IncomeSchemas } = require("../../models/index");
const { controllerWrapper } = require("../../utils/index");
//  ===================================================//

const { Income } = IncomeSchemas;

const addIncome = async (req, res, next) => {
  const { _id: owner } = req.user;
  const income = Income({ ...req.body, owner });

  const result = await income.save();
  await income.populate("owner", "_id name email");

  res.status(201).json(result);
};

module.exports = controllerWrapper(addIncome);
