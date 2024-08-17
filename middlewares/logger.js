const { appendFile } = require("fs/promises");
const moment = require("moment");

const logger = async (req, res, next) => {
  /**
   * Logs the request method, URL, and date/time to a server log file.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @param {Function} next - The next middleware function.
   * @return {Promise} A Promise that resolves when the log entry is written to the file.
   */

  const date = moment().format("DD/MM/YYYY, HH:mm:ss");
  await appendFile(
    "./public/server.log",
    `${req.method} ${req.url} ${date};\n`
  );
  next();
};

module.exports = logger;
