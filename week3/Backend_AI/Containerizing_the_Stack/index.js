import 'dotenv/config';
import app from "./src/server.js";

const PORT = process.env.PORT;
const HOST = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server running on port ${HOST}`);
});
