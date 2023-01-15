require("dotenv").config();

let express = require("express");
let app = express();
let cors = require("cors");

let { connection } = require("./config/db");


const  authenticate  = require("./middleware/authenticate");
const  TodoRouter  = require("./route/todo.route")
const userRouter  =require("./route/user.route")

app.use(express.json());
app.use(cors());

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
