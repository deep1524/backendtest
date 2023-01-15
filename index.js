const express = require("express");
const connection = require("./config/db");
const userRouter=require("./route/user.route")
const noteRouter=require("./route/todo.route");
const authetication=require("./middleware/authenticate")
require("dotenv").config()
const cors=require("cors");
const app = express();
app.use(cors({
  origin:"*",
}))
app.use(express.json());


app.use("/users",userRouter)
app.use(authetication)
app.use("/notes",noteRouter)



app.listen(process.env.port, async () => {
  try {
    await connection;

    console.log("connection established");
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
  console.log(`listening on port ${process.env.port}`);
});
