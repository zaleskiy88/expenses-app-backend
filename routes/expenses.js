const router = require("express").Router();
const { expensesControllers: ctrl } = require("../controllers/index");
const { validateBody } = require("../middlewares/index");
const { ExpenseSchemas } = require("../models/index");
//  ===============================================================  //

const { addExpenseSchema } = ExpenseSchemas;
///Expense Routes///
router.get("/expenses/get-expenses", ctrl.getExpenses);
router.post("/expenses/add-expense", validateBody(addExpenseSchema), ctrl.addExpense);
router.put("/expenses/update-expense/:id", validateBody(addExpenseSchema), ctrl.updateExpense);
router.delete("/expenses/delete-expense/:id", ctrl.deleteExpense);

module.exports = router;
