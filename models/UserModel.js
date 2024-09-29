const mongoose = require("mongoose");
const Joi = require("joi");
const { mongooseErrorHandler } = require("../utils/index");

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

//  ================Mongoose Schema===================================  //
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: emailRegexp, unique: true },
    password: { type: String, minength: 6, required: true },
    token: { type: String, default: "" },
  },
  { versionKey: false, timestamps: true }
);

//Schema error handling
UserSchema.post("save", mongooseErrorHandler);

const User = mongoose.model("User", UserSchema);

//  ================Joi Schema===================================  //

const RegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const LoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = { User, RegisterSchema, LoginSchema };
