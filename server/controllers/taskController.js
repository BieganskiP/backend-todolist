const Task = require("../models/task");

// Create a new task
const createTask = async (title, description, completed, deadline, urgency) => {
  try {
    const task = new Task({ title, description, completed, deadline, urgency });
    const savedTask = await task.save();
    console.log("Task created:", savedTask);
    return savedTask;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Get all tasks
const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("Tasks:", tasks);
  return tasks;
};

// Update a task by ID
const updateTask = async (taskId, updates) => {
  const updatedTask = await Task.findByIdAndUpdate(taskId, updates, {
    new: true,
  });
  console.log("Task updated:", updatedTask);
  return updatedTask;
};

// Delete a task by ID
const deleteTask = async (taskId) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId.trim());
    console.log("Task deleted:", deletedTask);
    return deletedTask;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
