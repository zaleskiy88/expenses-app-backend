const { IncomeSchemas } = require("../../models/index");
const { HttpError } = require("../../utils/index");
//  ===================================================//
const { Income } = IncomeSchemas;

const addIncome = async (req, res, next) => {
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
      throw HttpError(400, "All fields are required");
    }

    if (amount <= 0 || !amount === "number") {
      throw HttpError(400, "Amount must be a positive number");
    }

    await income.save();
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(201).json(incomes);
  } catch (error) {
    next(error);
  }
};

module.exports = addIncome;
