const { controllerWrapper, HttpError } = require("../../utils/index");
const { UserSchemas } = require("../../models/index");

//========================================================//

const { User } = UserSchemas;

const logout = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, { token: "" });

  if (!user) {
    throw HttpError(401, "Not authorized");
  }

  res.status(200).json({ message: "logout success" });
};

module.exports = controllerWrapper(logout);
