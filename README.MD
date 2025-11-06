# HITOCEAN Clone (Proyecto Educativo Full-Stack)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/index.html)

Este repositorio contiene una réplica **con fines educativos** de la página web oficial de [**HITOCEAN**](https://hitocean.com/en/).

El proyecto está diseñado como una aplicación **Full-Stack** (Cliente-Servidor) y sirve como ejercicio para integrar las siguientes tecnologías:

| Componente | Tecnologías Clave | Base de Datos |
| :--- | :--- | :--- |
| **Backend** | Node.js, Express.js, TypeScript | SQLite3 (`usuarios.db`) |
| **Frontend** | HTML, CSS, JavaScript (Vanilla) | N/A |

# Estructura del proyecto

hitocean/
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ │ └── usuarios.ts
│ │ ├── database.ts
│ │ └── index.ts
│ ├── package.json
│ ├── tsconfig.json
│ └── usuarios.db (se genera automáticamente)
│
└── frontend/
├── assets/
├── data/
│ ├── form.js
│ └── tabla.js
├── styles/
└── views/
├── hitocean.html (formulario)
└── admin.html (tabla)
