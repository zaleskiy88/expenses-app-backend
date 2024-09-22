const { UserSchemas } = require("../../models/index");
const { controllerWrapper, HttpError } = require("../../utils/index");

const { User } = UserSchemas;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const newUser = User({ name, email, password });
  await newUser.save();

  res.status(201).json({ message: "User created successfully" });
};

module.exports = controllerWrapper(register);
