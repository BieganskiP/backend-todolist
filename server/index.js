const express = require("express");
const app = express();
const connectDB = require("./db");
const taskController = require("./controllers/taskController");

connectDB();

app.use(express.json());
const port = process.env.PORT || 3000;

// Create a task
app.post("/tasks", async (req, res) => {
  const { title, description, completed, deadline, urgency } = req.body;
  try {
    const newTask = await taskController.createTask(
      title,
      description,
      completed,
      deadline,
      urgency
    );
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await taskController.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
});

// Update a task
app.put("/tasks/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const updates = req.body;
  try {
    const updatedTask = await taskController.updateTask(taskId.trim(), updates);
    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
});

// Delete a task
app.delete("/tasks/:taskId", async (req, res) => {
  const { taskId } = req.params;
  try {
    const deletedTask = await taskController.deleteTask(taskId.trim());
    res.json(deletedTask);
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
