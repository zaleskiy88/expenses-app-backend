const { HttpError } = require("../utils/index");

//  ====================================================  //

function validateBody(schema) {
  /**
   * Returns a middleware function that validates the request body against a provided schema.
   * This is a JavaScript function named validateBody that returns another function named validate.
   * The validate function is a middleware that validates the request body against a provided schema.
   * If the validation fails, it calls the next function with a 400 error;
   * otherwise, it calls next without an error, allowing the request to proceed.
   * @param {object} schema - The schema to validate the request body against
   * @return {function} A middleware function that validates the request body
   */
  function validate(req, res, next) {
    const { error } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  }

  return validate;
}

module.exports = validateBody;
