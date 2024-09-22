const { UserSchemas } = require("../../models/index");
const { controllerWrapper, HttpError } = require("../../utils/index");
const bcrypt = require("bcrypt");

const { User } = UserSchemas;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  //checking if user already exists in db
  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = User({ ...req.body, password: hashPassword });
  await newUser.save();

  res.status(201).json({ message: "User created successfully" });
};

module.exports = controllerWrapper(register);
