import express from 'express';
import { getAllTasks, getTasksById } from './taskControllers.js';

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

export default app;
