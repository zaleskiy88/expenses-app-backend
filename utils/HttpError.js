const errorMessageList = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
  500: "Internal server error",
};

const HttpError = (status, message = errorMessageList[status]) => {
  /**
   * Returns an error object with a given status and message.
   * The message is either the second argument, or a default message
   * based on the status code.
   * @param {number} status - The HTTP status code.
   * @param {string} [message] - The error message.
   * @returns {Error} An error object with the given status and message.
   */

  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

module.exports = HttpError;
