const router = require("express").Router();
const { incomesControllers: ctrl } = require("../controllers/index");

///Income Routes///
router.get("/get-incomes", ctrl.getIncomes);
router.post("/add-income", ctrl.addIncome);
router.put("/update-income/:id", ctrl.updateIncome);
router.delete("/delete-income/:id", ctrl.deleteIncome);

module.exports = router;
