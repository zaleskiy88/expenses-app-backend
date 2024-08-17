const { IncomeSchemas } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//
const { Income } = IncomeSchemas;

const deleteIncome = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteIncome = await Income.findByIdAndDelete(id);

    if (!deleteIncome) {
      throw HttpError(404, "Income not found");
    }

    const incomes = await Income.find().sort({ createdAt: -1 });
    return res.status(200).json(incomes);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteIncome;
