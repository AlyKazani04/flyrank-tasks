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

export async function insertTask(title) {
  const insertResult = await db.query(`INSERT INTO tasks (title) VALUES($1) RETURNING *;`, [title]);

  return insertResult.rows.map(rowToTask);
}

export async function modifyTask(title, done, id) {
  const updateResult = await db.query('UPDATE tasks SET title = $1, done = $2 WHERE id = $3 RETURNING *;', [title, done, id]);

  return updateResult.rows.map(rowToTask);
}

export async function removeTask(id) {
  const deleteResult = db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);

  return (await deleteResult).rowCount;
}
