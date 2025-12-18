import express from "express";
import dbConnection from "./config/dbConnection.js"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser"

import dotenv from "dotenv";


dotenv.config()

const app = express();
app.use(express.json())
app.use(cookieParser())
const prot =process.env.PORT 
app.use("/api/v1/user",userRouter)
app.use("/api/v1/task",taskRouter)


dbConnection()
app.get("/",  (req, res) => {
  res.send("Hello");
});

console.log("hello")

app.listen(prot, () => {
  console.log(`server start  ${prot} `);
});
