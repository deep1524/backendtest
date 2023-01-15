
const express = require("express");
const { connection } = require("./config/db");
const userRouter  =require("./route/user.route")
const  TodoRouter  = require("./route/todo.route")
const  authenticate  = require("./middleware/authenticate");
require("dotenv").config();
const cors = require("cors");
let app = express();
app.use(cors({
  origin:"*",
}))
app.use(express.json());
app.use("/user",userRouter);

app.use(authenticate)
app.use("/todos", TodoRouter);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to database");
    console.log("Listening on port " + process.env.PORT);
  } catch (err) {
    console.log("Connection to DB failed");
  }
});
