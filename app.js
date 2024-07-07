require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();
const PORT = process.env.PORT;

///Middleware///
app.use(express.json());
app.use(cors());

///Routes///
readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
});

///Server///
const server = () => {
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
