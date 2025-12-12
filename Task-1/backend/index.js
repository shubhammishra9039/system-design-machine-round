import express from "express";
import dbConnection from "./config/dbConnection.js"
import userRouter from "./routes/user.js"
import dotenv from "dotenv";


dotenv.config()

const app = express();
app.use(express.json())
const prot =process.env.PORT 
app.use("/api/v1/user",userRouter)


dbConnection()
app.get("/",  (req, res) => {
  res.send("Hello");
});



app.listen(prot, () => {
  console.log(`server start  ${prot} `);
});
