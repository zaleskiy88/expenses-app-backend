const IncomeSchema = require("../models/IncomeModel");
const addIncome = async (req, res) => {
  const { title, amount, date, category, description } = req.body;

  const income = IncomeSchema({
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
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteIncome = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteIncome = await IncomeSchema.findByIdAndDelete(id);

    if (!deleteIncome) {
      return res.status(404).json({ message: "Income not found" });
    }

    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    return res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addIncome, getIncomes, deleteIncome };
