import { getAll, getById, insertTask, modifyTask, removeTask } from "./taskQueries.js";

export const getAllTasks = async (req, res) => {
  try {

    const tasks = await getAll();

    if (tasks.length === 0) {
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

export const getTasksById = async (req, res) => {
  try {
    let id = req.params.id;

    id = parseInt(id, 10);
    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: 'Invalid ID provided',
      });
    }

    const task = await getById(id);

    if (task.length === 0) {
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

export const addNewTask = async (req, res) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({
      error: 'Missing title',
    });
  }

  try {
    const taskAdded = await insertTask(title);
    if (taskAdded.length === 0) {
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

export const updateTask = async (req, res) => {
  let { id } = req.params;
  const { title, done } = req.body;

  if (!title || title.trim() === '' || !id || done === null || done === undefined) {
    return res.status(400).json({
      error: 'Missing title or id or done',
    });
  }

  id = parseInt(id, 10);
  if (isNaN(id)) {
    return res.status(400).json({
      error: 'ID must be a number',
    });
  }

  try {
    const updatedTask = await modifyTask(title, done, id);
    if (updatedTask.length === 0) {
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

export const deleteTask = async (req, res) => {
  let { id } = req.params;

  id = parseInt(id, 10);
  if (isNaN(id)) {
    return res.status(400).json({
      error: 'ID must be a number',
    });
  }

  try {
    const deletedTaskCount = await removeTask(id);
    if (deletedTaskCount === 0) {
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
