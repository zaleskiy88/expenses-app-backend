const { HttpError, controllerWrapper } = require("../../utils/index");
const { IncomeSchemas } = require("../../models/index");
//  ==============================================  //

const { Income, addIncomeSchema } = IncomeSchemas;

const updateIncome = async (req, res, next) => {
  const { id } = req.params;
  const { error } = addIncomeSchema.validate(req.body);

  if (error) {
    throw (HttpError(400), error.message);
  }
  const result = await Income.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  if (!result) {
    throw (HttpError(400), "Not found");
  }

  res.status(200).json(result);
};

module.exports = controllerWrapper(updateIncome);
