const { IncomeSchemas } = require("../../models/index");
const { HttpError, controllerWrapper } = require("../../utils/index");
//  ===================================================//
const { Income } = IncomeSchemas;

const deleteIncome = async (req, res, next) => {
  const { _id: ownerId } = req.user;
  const { id } = req.params;
  const result = await Income.findOneAndDelete({ _id: id, owner: ownerId });

  if (!result) {
    throw HttpError(404, "Income not found");
  }

  await result.populate("owner", "_id name email");
  return res.status(200).json(result);
};

module.exports = controllerWrapper(deleteIncome);
