// backend/src/routes/usuarios.ts
import { Router } from "express";
import db from "../db";

const router = Router();

// 🟢 Obtener todos los usuarios
router.get("/", (_req, res) => {
  db.all("SELECT * FROM usuarios", (err, rows) => {
    if (err) {
      console.error("❌ Error al obtener usuarios:", err.message);
      res.status(500).json({ error: "Error al obtener usuarios" });
    } else {
      res.json(rows);
    }
  });
});

// 🟢 Crear nuevo usuario
router.post("/", (req, res) => {
  const { name, email, company, phone, message, source } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "El nombre y el email son obligatorios" });
  }

  const query = `
    INSERT INTO usuarios (name, email, company, phone, message, source)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [name, email, company, phone, message, source], function (err) {
    if (err) {
      console.error("❌ Error al insertar usuario:", err.message);
      res.status(500).json({ error: "Error al insertar usuario" });
    } else {
      res.json({
        id: this.lastID,
        name,
        email,
        company,
        phone,
        message,
        source,
      });
    }
  });
});

export default router;
