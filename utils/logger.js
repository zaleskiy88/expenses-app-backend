const { appendFile } = require("fs/promises");
const moment = require("moment");

const logger = async (req, res, next) => {
  const date = moment().format("DD/MM/YYYY, HH:mm:ss");
  await appendFile(
    "./public/server.log",
    `${req.method} ${req.url} ${date};\n`
  );
  next();
};

module.exports = logger;
