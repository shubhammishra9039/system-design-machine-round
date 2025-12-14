import Task from "../model/task.model.js";
import User from "../model/user.model.js";

export const createTask = async (req, res) => {
  const { taskName, taskDescription, status } = req.body;

  if (!taskName || !taskDescription || !status) {
    return res.status(500).json({ message: "all field are required" });
  }
  const task = await Task.create({ taskName, taskDescription, status });

  if (!task) {
    return res.status(500).json({ message: "task Not create successfully" });
  }

  res.status(201).json({ message: "task create successfully", task });
};

export const updateTask = async (req, res) => {
  const { taskId, taskName, taskDescription, status } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      taskId,
      { taskName, taskDescription, status },
      { new: true, runValidators: true }
    );

    if (!updateTask) {
      return res.status(500).json({ message: "task Update field" });
    }
    res.status(200).json({ message: "Task Update sucsssecfully ", task });
  } catch (err) {
    console.error(err);
  }
};

export const deleteTask = async (req, res) => {
  const { taskId } = req.body;

  try {
    const deleteTask = await Task.findByIdAndDelete({ _id: taskId });

    if (!deleteTask) {
      return res.status(500).json({ message: "Task Not found" });
    }

    res.status(200).json({ message: "Task Delete Successfully" }, deleteTask);
  } catch (err) {
    console.log(err);
  }
};

export const getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find();

    if (!allTask) {
      return res.status(500).json({ message: "Task Not Found" });
    }

    res.status(200).json({ message: "Task Get Successfully", allTask });
  } catch (err) {
    console.log(err);
  }
};

export const assignTaskToUser = async (req, res) => {
  const { taskId, userId } = req.body;

  try {
    const updateTask = await Task.findByIdAndUpdate(
      { _id: taskId },
      { user: [userId] }
    );

    const updateUser = await Task.findByIdAndUpdate(
      { _id: userId },
      { task: [taskId] }
    );

    if (!updateTask || !updateUser) {
      return res.status(500).json({ message: "Task Assigned failed" });
    }

    res.status(200).json({ message: "Task Assigned successfully" ,updateTask,updateUser});
  } catch (error) {}
};
