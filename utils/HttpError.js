const HttpError = (status, message) => {
  /**
   * Creates a new HttpError object with the specified status and message.
   * @param {number} status - The HTTP status code of the error.
   * @param {string} message - A description of the error.
   * @return {Error} A new HttpError object.
   */
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

module.exports = HttpError;
