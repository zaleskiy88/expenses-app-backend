const { controllerWrapper } = require("../../utils/index");

const getCurrent = async (req, ress) => {
  const { name, email, _id, token } = req.user;
  ress.json({ _id, name, email, token });
};

module.exports = controllerWrapper(getCurrent);
