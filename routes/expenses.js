const router = require("express").Router();
const { expensesControllers: ctrl } = require("../controllers/index");

///Expense Routes///
router.get("/get-expenses", ctrl.getExpenses);
router.post("/add-expense", ctrl.addExpense);
router.delete("/delete-expense/:id", ctrl.deleteExpense);

module.exports = router;
