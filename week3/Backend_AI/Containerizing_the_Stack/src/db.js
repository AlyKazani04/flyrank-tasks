import Database from "better-sqlite3";

const db = new Database('./tasks.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const SEED_TASKS = [
  { id: 1, title: 'Init Task', done: false },
  { id: 2, title: 'Generate DB', done: false },
  { id: 3, title: 'Implement DB Methods', done: false },
];

const insertSeedTask = db.prepare('INSERT INTO tasks (id, title, done) VALUES (?, ?, ?);');

function seedTasks(tasks) {
  for (const task of tasks) {
    insertSeedTask.run(task.id, task.title, task.done ? 1 : 0);
  }
}

// seed only when table is empty or newly created
const taskCount = db.prepare('SELECT COUNT(*) AS count FROM tasks;')

if (taskCount.get().count === 0) {
  db.transaction(seedTasks)(SEED_TASKS);
}

export function resetDB() {
  const wipe = db.prepare('DELETE FROM tasks;');
  const reset = db.transaction((tasks) => {
    wipe.run();
    seedTasks(tasks);
  });

  reset(SEED_TASKS);
}

export { db };
