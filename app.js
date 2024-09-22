require("dotenv").config();
const { connectDB } = require("./db/db");
const { readdirSync } = require("fs");
const express = require("express");
const cors = require("cors");
const { /*logger,*/ HttpError } = require("./utils/index");

const app = express();
const PORT = process.env.PORT;

///Middlewares///
app.use(express.json());
app.use(cors());
//app.use(logger);

///Routes///
readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

///Error handlers Middlewares///
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});

///Server///
const server = () => {
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
server();
