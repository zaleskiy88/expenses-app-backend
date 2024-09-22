const router = require("express").Router();
const { categoriesControllers: ctrl } = require("../controllers/index");

///Categories Routes///
router.get("/categories/get-categories", ctrl.getCategories);

module.exports = router;
