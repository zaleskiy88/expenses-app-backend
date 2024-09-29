const { IncomeSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//

const { Income } = IncomeSchemas;

const getIncomes = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const { _id: owner } = req.user;
  const skip = (page - 1) * limit;

  const incomes = await Income.find({ owner }, null, { skip, limit }).sort({ createdAt: -1 });

  if (!incomes) {
    throw HttpError(404, "Not found");
  }

  await incomes.populate("owner", "_id name email");
  res.status(200).json(incomes);
};

module.exports = controllerWrapper(getIncomes);
