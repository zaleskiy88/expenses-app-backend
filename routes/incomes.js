const router = require("express").Router();
const { incomesControllers: ctrl } = require("../controllers/index");
const { validateBody } = require("../middlewares/index");
const { IncomeSchemas } = require("../models/index");
//  ===============================================================  //

const { addIncomeSchema } = IncomeSchemas;
///Income Routes///
router.get("/get-incomes", ctrl.getIncomes);
router.post("/add-income", validateBody(addIncomeSchema), ctrl.addIncome);
router.put("/update-income/:id", validateBody(addIncomeSchema), ctrl.updateIncome);
router.delete("/delete-income/:id", ctrl.deleteIncome);

module.exports = router;
