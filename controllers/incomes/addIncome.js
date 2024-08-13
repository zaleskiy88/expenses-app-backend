const { IncomeSchemas } = require("../../models/index");
//  ===================================================//
const { Income } = IncomeSchemas;
const addIncome = async (req, res) => {
  const { title, amount, date, category, description } = req.body;

  const income = Income({
    title,
    amount,
    description,
    category,
    date,
  });

  ///Validatons///
  try {
    if (!title || !date || !category || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }

    await income.save();
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = addIncome;
