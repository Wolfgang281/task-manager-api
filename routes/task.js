const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
