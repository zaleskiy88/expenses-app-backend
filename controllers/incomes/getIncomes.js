const { IncomeSchemas } = require("../../models/index");
//  ===================================================//
const { Income } = IncomeSchemas;
const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getIncomes;
