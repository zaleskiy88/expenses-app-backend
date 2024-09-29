require("dotenv").config();
const { HttpError } = require("../utils/index");
const { UserSchemas } = require("../models/index");
const jwt = require("jsonwebtoken");

//========================================================//

const { JWT_SECRET_KEY } = process.env;
const { User } = UserSchemas;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  //Checking if "Bearer" even exists in Authorization headers
  if (bearer !== "Bearer") {
    next(HttpError(401));
  }

  //validating token & user
  try {
    const { id } = jwt.verify(token, JWT_SECRET_KEY);
    const user = await User.findById(id);

    if (!user) {
      next(HttpError(401));
    }

    //Adding user to request
    req.user = user;
    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
