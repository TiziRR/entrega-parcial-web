# 🌊 HITOCEAN

Proyecto web dividido en **frontend** y **backend**.  
Frontend: HTML/CSS/JS (vistas separadas: formulario y tabla).  
Backend: Node + Express + TypeScript + SQLite3 (archivo `usuarios.db`).

---

## 📁 Estructura del proyecto (resumida)

```
hitocean/
├─ backend/
│  ├─ src/
│  │  ├─ routes/
│  │  │  └─ usuarios.ts
│  │  ├─ database.ts
│  │  └─ index.ts
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ usuarios.db (se crea automáticamente)
└─ frontend/
   ├─ scripts/
   │  ├─ form.js
   │  └─ admin.js
   ├─ styles/
   └─ views/
      ├─ hitocean.html
      └─ admin.html
```

---

## ✅ Requisitos

- Node.js (recomendado v18+)
- npm
- (Opcional) VSCode + Live Server

---

## ⚙️ Instalación (backend)

```bash
cd backend
npm install
```

---

## 🧾 Scripts disponibles

```json
"scripts": {
  "start": "node dist/index.js",
  "build": "tsc",
  "dev": "ts-node-dev --respawn src/index.ts"
}
```

- `npm run dev` → modo desarrollo  
- `npm run build` → transpila TS a JS  
- `npm start` → ejecuta la versión compilada

---

## 🚀 Cómo arrancar todo

### 1️⃣ Backend

```bash
npm run dev
```

Verás:

```
✅ Conectado a la base de datos SQLite.
🚀 Servidor corriendo en http://localhost:3000
```

### 2️⃣ Frontend (Live Server)

Abrí `views/hitocean.html` con Live Server.  
URL: `http://127.0.0.1:5500/frontend/views/hitocean.html`

Luego abrí `views/admin.html` para ver la tabla.

---

## 🔗 Comunicación

- Backend: `http://localhost:3000`
- Endpoints:
  - `GET  /api/usuarios`
  - `POST /api/usuarios`

---

## 💾 Base de datos (SQLite3)

Archivo: `backend/usuarios.db`  
Tabla: `usuarios`

| Campo | Tipo |
|--------|------|
| id | INTEGER |
| name | TEXT |
| email | TEXT |
| company | TEXT |
| phone | TEXT |
| message | TEXT |
| source | TEXT |

---

## 🧪 Flujo de prueba

1. `npm run dev`
2. Abrir `hitocean.html` → enviar formulario
3. Abrir `admin.html` → ver tabla

---

## ⚠️ CORS

Configurado para permitir:

```ts
app.use(cors({
  origin: ["http://localhost:5500", "http://127.0.0.1:5500"]
}));
```

---

## 📌 Endpoints

- `GET  /api/usuarios` → obtener todos
- `POST /api/usuarios` → crear usuario

---

## ✨ Autor

Desarrollado por **Tiziano Rossi** – Proyecto académico **HITOCEAN**

