const router = require("express").Router();
const { authControllers: ctrl } = require("../controllers/index");
const { validateBody } = require("../middlewares/index");
const { UserSchemas } = require("../models/index");

const { RegisterSchema, LoginSchema } = UserSchemas;

router.post("/auth/register", validateBody(RegisterSchema), ctrl.register);

module.exports = router;
