const router = require("express").Router();
const { authControllers: ctrl } = require("../controllers/index");
const { validateBody } = require("../middlewares/index");
const { UserSchemas } = require("../models/index");

const { RegisterSchema, LoginSchema } = UserSchemas;
///Authentication Routes///
router.post("/auth/register", validateBody(RegisterSchema), ctrl.register);
router.post("/auth/login", validateBody(LoginSchema), ctrl.login);

module.exports = router;
