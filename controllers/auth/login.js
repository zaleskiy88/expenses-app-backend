const { UserSchemas } = require("../../models/index");
const { controllerWrapper, HttpError } = require("../../utils/index");
const bcrypt = require("bcrypt");

const { User } = UserSchemas;

const login = async (req, res) => {
  const { email, password } = req.body;

  //Checking if user exists in DB
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password wrong or invalid");
  }

  //checking if password is correct
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password wrong or invalid");
  }

  //Creating token
  const token = "gkorwkg35986t940tutfiwgjv5aeitgu853utg.daw";

  res.json({ token });
};

module.exports = controllerWrapper(login);
