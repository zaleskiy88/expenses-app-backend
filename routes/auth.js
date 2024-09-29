const router = require("express").Router();
const { authControllers: ctrl } = require("../controllers/index");
const { validateBody, authenticate } = require("../middlewares/index");
const { UserSchemas } = require("../models/index");
//  ===============================================================  //

const { RegisterSchema, LoginSchema } = UserSchemas;
///Authentication Routes///
router.post("/auth/register", validateBody(RegisterSchema), ctrl.register);
router.post("/auth/login", validateBody(LoginSchema), ctrl.login);
router.post("/auth/logout", authenticate, ctrl.logout);
router.get("/auth/current", authenticate, ctrl.getCurrent);

module.exports = router;
