const router = require("express").Router();
const { expensesControllers: ctrl } = require("../controllers/index");
const { validateBody, authenticate } = require("../middlewares/index");
const { ExpenseSchemas } = require("../models/index");
const { HttpError } = require("../utils/index");
//  ===============================================================  //

const { addExpenseSchema } = ExpenseSchemas;
///Expense Routes///
router.get("/expenses/get-expenses", authenticate, ctrl.getExpenses);
router.post("/expenses/add-expense", authenticate, validateBody(addExpenseSchema), ctrl.addExpense);
router.put("/expenses/update-expense/:id", authenticate, validateBody(addExpenseSchema), ctrl.updateExpense);
router.delete("/expenses/delete-expense/:id", authenticate, ctrl.deleteExpense);

module.exports = router;
