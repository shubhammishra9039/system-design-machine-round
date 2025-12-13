import express from "express"


const router = express.Router()


router.post("/createTask",createTask)
router.put("/updateTask",updateTask)
router.delete("/deleteTask",deleteTask)
router.get("/getAllTask",getAllTask)


export default router