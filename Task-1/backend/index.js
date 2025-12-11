import express from "express";
import dbConnection from "./config/dbConnection.js"
import dotenv from "dotenv";


dotenv.config()

const app = express();
const prot =process.env.PORT 



dbConnection()
app.get("/",  (req, res) => {
  res.send("Hello");
});




app.listen(prot, () => {
  console.log(`server start  ${prot} `);
});
