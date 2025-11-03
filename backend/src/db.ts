// backend/src/database.ts
import sqlite3 from "sqlite3";

sqlite3.verbose();

const db = new sqlite3.Database("./usuarios.db", (err) => {
  if (err) {
    console.error("❌ Error al conectar con SQLite:", err.message);
  } else {
    console.log("✅ Conectado a la base de datos SQLite.");
  }
});

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    company TEXT,
    phone TEXT,
    message TEXT,
    source TEXT
  )
`);

export default db;
