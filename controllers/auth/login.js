require("dotenv").config();
const { UserSchemas } = require("../../models/index");
const { controllerWrapper, HttpError } = require("../../utils/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//========================================================//

const { JWT_SECRET_KEY, JWT_TOKEN_MAX_AGE } = process.env;
const { User } = UserSchemas;

const login = async (req, res, next) => {
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

  //Creating token and saving it in User DB
  const payload = { id: user._id.toString() };
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_TOKEN_MAX_AGE });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({ token });
};

module.exports = controllerWrapper(login);
