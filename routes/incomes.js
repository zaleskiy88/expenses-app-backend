const router = require("express").Router();
const { incomesControllers: ctrl } = require("../controllers/index");
const { validateBody, authenticate } = require("../middlewares/index");
const { IncomeSchemas } = require("../models/index");
//  ===============================================================  //

const { addIncomeSchema } = IncomeSchemas;
///Income Routes///
router.get("/incomes/get-incomes", authenticate, ctrl.getIncomes);
router.post("/incomes/add-income", authenticate, validateBody(addIncomeSchema), ctrl.addIncome);
router.put("/incomes/update-income/:id", authenticate, validateBody(addIncomeSchema), ctrl.updateIncome);
router.delete("/incomes/delete-income/:id", authenticate, ctrl.deleteIncome);

module.exports = router;
