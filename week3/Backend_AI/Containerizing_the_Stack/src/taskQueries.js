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

  return rows.map(rowToTask);
}

export function getById(id) {
  const rows = db.prepare(`SELECT ${TASK_COLUMNS} FROM tasks WHERE id = ?;`).all(id);

  return rows.map(rowToTask);
}

export function insertTask(title) {
  const insert = db.prepare(`INSERT INTO tasks (title) VALUES(?) RETURNING *;`);

  const row = insert.all(title);

  return row.map(rowToTask);
}

export function modifyTask(title, done, id) {
  const update = db.prepare('UPDATE tasks SET title = ?, done = ? WHERE id = ? RETURNING *;');

  const row = update.all(title, done, id);

  return row.map(rowToTask);
}

export function removeTask(id) {
  const deleted = db.prepare('DELETE FROM tasks WHERE id = ?');

  const row = deleted.run(id);

  return row.changes;
}
