require("dotenv").config();
const { HttpError } = require("../utils/index");
const { UserSchemas } = require("../models/index");
const jwt = require("jsonwebtoken");

//========================================================//

const { JWT_SECRET_KEY } = process.env;
const { User } = UserSchemas;
const authenticate = (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  //Checking if "Bearer" even exists in Authorization headers
  if (bearer !== "Bearer") {
    next(HttpError(401));
  }

  //validating token & user
  try {
    const { id } = jwt.verify(token, JWT_SECRET_KEY);
    const user = User.findOne({ id });

    if (!user) {
      next(HttpError(401));
    }
  } catch {
    next(HttpError(401));
  }

  next();
};

module.exports = authenticate;
