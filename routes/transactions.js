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
const { getCategories } = require("../controllers/categories");

///Income Routes///
router.get("/get-incomes", getIncomes);
router.post("/add-income", addIncome);
router.delete("/delete-income/:id", deleteIncome);

///Expense Routes///
router.get("/get-expenses", getExpenses);
router.post("/add-expense", addExpense);
router.delete("/delete-expense/:id", deleteExpense);

///Categories Routes///
router.get("/get-categories", getCategories);

module.exports = router;
