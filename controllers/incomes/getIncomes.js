const { IncomeSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ======================get Incomes=============================//

const { Income } = IncomeSchemas;

const getIncomes = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const { _id: owner } = req.user;
  const skip = (page - 1) * limit;

  const incomes = await Income.find({ owner }, null, { skip, limit })
    .sort({ createdAt: -1 })
    .populate("owner", "_id name email");

  if (!incomes) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(incomes);
};

module.exports = controllerWrapper(getIncomes);
