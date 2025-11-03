# 🌊 HITOCEAN Clone (Proyecto Educativo Full-Stack)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/index.html)

## 📌 Resumen del Proyecto

Este repositorio contiene una réplica **con fines educativos** de la página web oficial de [**HITOCEAN**](https://hitocean.com/en/).

El proyecto está diseñado como una aplicación **Full-Stack** (Cliente-Servidor) y sirve como ejercicio para integrar las siguientes tecnologías:

| Componente | Tecnologías Clave | Base de Datos |
| :--- | :--- | :--- |
| **Backend** | Node.js, Express.js, TypeScript | SQLite3 (`usuarios.db`) |
| **Frontend** | HTML, CSS, JavaScript (Vanilla) | N/A |

## ⚙️ Configuración y Puesta en Marcha

Sigue estos pasos para obtener una copia local del proyecto y poner a funcionar el servidor (Backend) y el cliente (Frontend).

### 1. Prerrequisitos

Asegúrate de tener instalado **Node.js** (se recomienda la versión LTS) y **npm** en tu máquina.

### 2. Clonación

Clona el repositorio en tu máquina local:

```
git clone [https://github.com/TiziRR/entrega-parcial-web.git](https://github.com/TiziRR/entrega-parcial-web.git) 
cd HITOCEAN 
```

### 3. Instalación del BackendEl Backend gestiona la API y la conexión a la base de datos (SQLite3).
```
cd backend
npm install
```

### 4. Ejecución del Proyecto (Flujo Integrado)
Para desarrollar y probar la aplicación, es necesario ejecutar tanto el servidor (Backend) como el cliente (Frontend).

Paso A: Iniciar el Servidor API (Backend)
Utiliza el siguiente comando para iniciar el servidor de desarrollo, que soporta la recarga automática (hot-reload) gracias a ts-node-dev.
```
// Estando en la carpeta 'backend'
npm run dev
```
El servidor Express se iniciará en modo desarrollo y escuchará en el puerto configurado.

Paso B: Abrir la Interfaz de Usuario (Frontend)

El Frontend es un conjunto de archivos estáticos (HTML, CSS, JS) que se comunican con el Backend.
 - Abre una nueva ventana del explorador de archivos.
 - Navega hasta la carpeta frontend/.Haz doble clic en el archivo views/index.html para abrir la aplicación en tu navegador.
   Nota: Para desarrollo más avanzado o evitar problemas de CORS, se recomienda usar una extensión de servidor local como "Live Server" en VS Code.


🛠️ Comandos de Desarrollo del Backend

Comando,Función,Descripción
npm run dev,Inicio en Desarrollo,Inicia el servidor usando ts-node-dev. Reinicia automáticamente al detectar cambios en archivos src/**/*.ts.
npm run build,Compilación,Transpila los archivos de TypeScript (src/) a JavaScript y los guarda en la carpeta dist/.
npm start,Inicio en Producción,Ejecuta el código ya compilado desde la carpeta dist/ (node dist/index.js).
npm install,Dependencias,Instala todas las dependencias listadas en package.json.

🌳 Estructura de Carpetas

HITOCEAN/
├── backend/                  # Servidor API (Node.js/Express/TypeScript)
│   ├── dist/                 # Código JavaScript compilado (Producción)
│   ├── node_modules/         # Dependencias del Backend
│   ├── src/                  # Archivos fuente TypeScript
│   │   ├── routes/           # Definición de las rutas de la API
│   │   ├── db.ts             # Lógica de conexión a SQLite
│   │   └── index.ts          # Punto de entrada principal del servidor
│   ├── package.json          # Metadatos y scripts de Node.js
│   ├── tsconfig.json         # Configuración del compilador TypeScript
│   └── usuarios.db           # Base de datos SQLite3
│
└── frontend/                 # Interfaz de Usuario (Cliente)
    ├── assets/               # Imágenes, fuentes u otros recursos
    ├── data/                 # Archivos de datos estáticos (JSON, etc.)
    ├── styles/               # Hojas de estilo CSS
    └── views/                # Archivos HTML (index.html, etc.)