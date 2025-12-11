
import mongoose from "mongoose"

 const dbConnection =  ()=>{
    try{
       mongoose.connect("mongodb://localhost:27017/TaskManagerApp").then(()=>{
        console.log("DB Connect Successfully")
       }).catch(()=>{
        console.error("DB connect Failed ")
       })
    }catch(error){
        console.error("DB connect Failed " ,error)
    }

}

export default dbConnection