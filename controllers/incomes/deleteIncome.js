const { IncomeSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ======================delete Income=============================//
const { Income } = IncomeSchemas;

const deleteIncome = async (req, res, next) => {
  const { _id: ownerId } = req.user;
  const { id } = req.params;
  const result = await Income.findOneAndDelete({ _id: id, owner: ownerId });

  if (!result) {
    throw HttpError(404, "Income not found");
  }

  const incomes = await Income.find({ owner: ownerId })
    .sort({ createdAt: -1 })
    .populate("owner", "_id name email");
  return res.status(200).json(incomes);
};

module.exports = controllerWrapper(deleteIncome);
