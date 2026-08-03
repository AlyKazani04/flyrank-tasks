import { db } from "./db.js";

export const getAllTasks = (req, res) => {
  try {
    const tasks = db.select();

    if (tasks === null) {
      return res.status(404).json({
        error: 'No tasks found',
      });
    }

    return res.status(200).json({
      tasks,
    });
  }
  catch (error) {
    return res.status(500).json({
      error: error.name,
      message: error.message,
      cause: error.cause,
      stack: error.stack,
    });
  }
};

export const getTasksById = (req, res) => {
  try {
    const id = req.params.id;
    const task = db.select(id);

    if (task === null) {
      return res.status(404).json({
        error: `Task ${id} not found`,
      });
    }

    return res.status(200).json({
      task,
    });
  }
  catch (error) {
    return res.status(500).json({
      error: error.name,
      message: error.message,
      cause: error.cause,
      stack: error.stack,
    });
  }
};
