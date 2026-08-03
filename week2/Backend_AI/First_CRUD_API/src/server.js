import express from 'express';
import { addNewTask, deleteTask, getAllTasks, getTasksById, updateTask } from './taskControllers.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    name: "Task API",
    version: '1.0',
    endpoints: ["/tasks"],
  });
});

app.get('/health', (req, res) => {
  return res.json({
    status: 'ok',
  });
});

app.get('/tasks', getAllTasks);

app.get('/tasks/:id', getTasksById);

app.post('/tasks', addNewTask);

app.put('/tasks/:id', updateTask);

app.delete('/tasks/:id', deleteTask);

export default app;
