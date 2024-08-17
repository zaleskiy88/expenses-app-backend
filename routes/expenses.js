const router = require("express").Router();
const { expensesControllers: ctrl } = require("../controllers/index");
const { validateBody } = require("../middlewares/index");
const { ExpenseSchemas } = require("../models/index");
//  ===============================================================  //

const { addExpenseSchema } = ExpenseSchemas;
///Expense Routes///
router.get("/get-expenses", ctrl.getExpenses);
router.post("/add-expense", validateBody(addExpenseSchema), ctrl.addExpense);
router.put("/update-expense/:id", validateBody(addExpenseSchema), ctrl.updateExpense);
router.delete("/delete-expense/:id", ctrl.deleteExpense);

module.exports = router;
