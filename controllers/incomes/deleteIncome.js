const { IncomeSchemas } = require("../../models/index");
//  ===================================================//
const { Income } = IncomeSchemas;

const deleteIncome = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteIncome = await Income.findByIdAndDelete(id);

    if (!deleteIncome) {
      return res.status(404).json({ message: "Income not found" });
    }

    const incomes = await Income.find().sort({ createdAt: -1 });
    return res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = deleteIncome;
