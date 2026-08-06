import { getAll, getById } from "./taskQueries.js";

export const getAllTasks = (req, res) => {
  try {

    const tasks = getAll();

    if (tasks === undefined) {
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

    const parsedId = parseInt(id, 10);
    if (!parsedId || isNaN(parsedId)) {
      return res.status(400).json({
        error: 'Invalid ID provided',
      });
    }

    const task = getById(parsedId);

    if (task === undefined) {
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

export const addNewTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({
      error: 'Missing title',
    });
  }

  try {
    const taskAdded = db.insert(title);
    if (!taskAdded) {
      return res.status(500).json({
        error: "Failed to add task",
      });
    }

    return res.status(201).json({
      message: 'Created',
      taskAdded,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.name,
      message: error.message,
      cause: error.cause,
      stack: error.stack,
    });
  }
}

export const updateTask = (req, res) => {
  let { id } = req.params;
  const { title, done } = req.body;

  if (!title || !id || !done) {
    return res.status(400).json({
      error: 'Missing title or id or done',
    });
  }

  try {
    id = parseInt(id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        error: 'ID must be a number',
      });
    }

    const updatedTask = db.update({ id, title, done });
    if (updatedTask === null) {
      return res.status(404).json({
        error: 'Task not found',
      });
    }

    return res.status(200).json({
      message: 'Updated Successfully',
      updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.name,
      message: error.message,
      cause: error.cause,
      stack: error.stack,
    });
  }
}

export const deleteTask = (req, res) => {
  let { id } = req.params;

  try {
    id = parseInt(id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        error: 'ID must be a number',
      });
    }

    const deletedTask = db.delete(id);
    if (!deletedTask) {
      return res.status(404).json({
        error: 'Task not found',
      });
    }

    return res.status(204).json({
      message: 'No Content',
    });
  } catch (error) {
    return res.status(500).json({
      error: error.name,
      message: error.message,
      cause: error.cause,
      stack: error.stack,
    });
  }
}
