import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

const db = new Pool({
  connectionString
});

const SEED_TASKS = [
  { id: 1, title: 'Init Task', done: false },
  { id: 2, title: 'Generate DB', done: false },
  { id: 3, title: 'Implement DB Methods', done: false },
];

const insertSeedTask = 'INSERT INTO tasks (title, done) VALUES ($1, $2);';

async function seedTasks(tasks) {
  for (const task of tasks) {
    await db.query(insertSeedTask, [task.title, task.done]);
  }
}

async function initDB() {
  try {
    await db.query(`
        CREATE TABLE IF NOT EXISTS tasks (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          done BOOLEAN NOT NULL DEFAULT FALSE
        );
    `);
    console.log('DB Connected Successfully');

    // seed only when table is empty or newly created
    const taskCountResult = await db.query('SELECT COUNT(*) AS count FROM tasks;');
    const count = parseInt(taskCountResult.rows[0].count, 10);

    if (count === 0) {
      await seedTasks(SEED_TASKS);
      console.log('DB seeded with initial tasks');
    }
  } catch (error) {
    console.error('DB Initialization Error\n', error.stack);
  }
}

await initDB();

export async function resetDB() {
  const wipe = 'DELETE FROM tasks;';

  const client = await db.connect();
  try {
    await client.query('BEGIN');
    await client.query(wipe);

    for (const task of SEED_TASKS) {
      await client.query(insertSeedTask, [task.title, task.done]);
    }

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export { db };
