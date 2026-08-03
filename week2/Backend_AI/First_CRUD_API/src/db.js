export const db = {
  data: [
    { id: 1, title: 'Init Task', done: false },
    { id: 2, title: 'Generate DB', done: false },
    { id: 3, title: 'Implement DB Methods', done: false },
  ],
  id_generator: 3,

  select(id) {
    if (id === undefined || id === null)
      return this.data.map(item => ({ ...item }));

    id = parseInt(id, 10);
    if (!isNaN(id) && id > 0) {
      const row = this.data.find(row => row.id === id);

      return row ? { ...row } : null;
    }
    return null;
  },

  insert(title) {
    if (!title) return null;

    this.id_generator += 1;

    const newRow = { id: this.id_generator, title, done: false };
    this.data.push(newRow);

    return { ...newRow };
  },

  update({ id, title, done }) {
    if (id === undefined || !title || typeof done !== 'boolean' || isNaN(id))
      return null;

    id = parseInt(id, 10);
    const idx = this.data.findIndex(row => row.id === id);
    if (idx === -1) return null;

    this.data[idx] = { id, title, done };

    return { ...this.data[idx] };
  },

  delete(id) {
    if (id === undefined || isNaN(id)) return false;

    id = parseInt(id, 10);

    const idx = this.data.findIndex(row => row.id === id);
    if (idx !== -1) {
      this.data.splice(idx, 1);
      return true;
    }

    return false;
  }
};
