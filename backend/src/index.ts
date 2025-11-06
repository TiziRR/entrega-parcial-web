import express from "express";
import path from "path";
import usersRouter from "./routes/user";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "../../frontend")));

app.use("/api/usuarios", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/views/hitocean.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/views/admin.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
