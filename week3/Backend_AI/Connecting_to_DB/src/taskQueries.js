import { db } from './db.js';

const TASK_COLUMNS = 'id, title, done, created_at, updated_at';
const rowToTask = (row) => {
  return {
    id: row.id,
    title: row.title,
    done: Boolean(row.done),
    created_at: row.created_at,
    updated_at: row.updated_at
  };
};

export function getAll() {
  const rows = db.prepare(`SELECT ${TASK_COLUMNS} FROM tasks;`).all();

  return rows;
}

export function getById(id) {
  const rows = db.prepare(`SELECT ${TASK_COLUMNS} FROM tasks WHERE id = ?;`).get(id);

  return rows;
}
