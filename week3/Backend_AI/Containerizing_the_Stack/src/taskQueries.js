import { db } from './db.js';

const TASK_COLUMNS = 'id, title, done';
const rowToTask = (row) => {
  return {
    id: row.id,
    title: row.title,
    done: Boolean(row.done),
    created_at: row.created_at,
    updated_at: row.updated_at
  };
};

export async function getAll() {
  const selectResult = await db.query(`SELECT ${TASK_COLUMNS} FROM tasks;`);

  return selectResult.rows.map(rowToTask);
}

export async function getById(id) {
  const selectResult = await db.query(`SELECT ${TASK_COLUMNS} FROM tasks WHERE id = $1;`, [id]);

  return selectResult.rows.map(rowToTask);
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
