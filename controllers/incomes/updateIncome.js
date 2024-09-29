const { HttpError, controllerWrapper } = require("../../utils/index");
const { IncomeSchemas } = require("../../models/index");
//  ==============================================  //

const { Income } = IncomeSchemas;

const updateIncome = async (req, res, next) => {
  const { _id: ownerId } = req.user;
  const { id } = req.params;

  const result = await Income.findOneAndUpdate({ _id: id, owner: ownerId }, req.body, { new: true });

  if (!result) {
    throw HttpError(404);
  }

  await result.populate("owner", "_id name email");
  res.status(200).json(result);
};

module.exports = controllerWrapper(updateIncome);
