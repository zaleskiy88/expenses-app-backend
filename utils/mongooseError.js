/**
 * Sets error status to 409 if it is a unique key error,
 * otherwise sets it to 400. Passes the error to the next middleware.
 * @param {Error} error - A Mongoose error.
 * @param {object} data - Unused.
 * @param {function} next - The next middleware function to call.
 */
const mongooseErrorHandler = (error, data, next) => {
  error.status = error.name === "MongoServerError" && error.code === 11000 ? 409 : 400;
  next();
};

module.exports = mongooseErrorHandler;
