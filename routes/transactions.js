const router = require("express").Router();
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expense");

///Income Routes///
router.get("/get-incomes", getIncomes);
router.post("/add-income", addIncome);
router.delete("/delete-income/:id", deleteIncome);

///Expense Routes///
router.get("/get-expenses", getExpenses);
router.post("/add-expense", addExpense);
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
