import Task from "../model/task.model"
import User from "../model/user.model"




router.put("/updateTask",updateTask)
router.delete("/deleteTask",deleteTask)
router.get("/getAllTask",getAllTask)


export  const createTask = async(req,res)=>{
    const {taskName,taskDescription,status,user} = req.body

    if (!taskName || !taskDescription || !status || !user)
    {
        return res.status(500).json({message:"all field are required"})
    }
    const task = await task.create({taskName,taskDescription,status,user})


    if (!task){
        return res.status(500).json({message:"task Not create successfully"})
    }


    res.status(201).json({message:"task create successfully" , task})





}