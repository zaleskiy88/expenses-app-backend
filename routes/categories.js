const router = require("express").Router();
const { categoriesControllers: ctrl } = require("../controllers/index");

///Categories Routes///
router.get("/get-categories", ctrl.getCategories);

module.exports = router;
