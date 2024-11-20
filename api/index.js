const express = require("express");
const dbConnect = require("./config/database");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
var cors = require("cors");

app.use(express.json()); //middleware for parse req body
app.listen(port, () => {
  console.log("SERVER IS ON 3000: ");
});

dbConnect();

app.use(
  cors({
    origin: "*",
  })
);
const router = require("./routes/user");
app.use("/base", router);
