# 🌊 HITOCEAN Clone (Educacional)

![Badge de Estado](https://img.shields.io/badge/STATUS-Completado%20)
![Badge de Tecnolog%C3%ADas](https://img.shields.io/badge/Tecnolog%C3%ADas-Node.js%2C%20Express%2C%20TypeScript%2C%20SQLite3%2C%20HTML%2FCSS-informational)

## 🌟 Descripción del Proyecto

Este proyecto es una **copia con fines educativos** de la página web oficial de [**HITOCEAN**](https://hitocean.com/en/). Su objetivo es demostrar la implementación de una aplicación **Full-Stack** utilizando tecnologías modernas.

### Tecnologías Clave Usadas:

| Componente | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Backend** | **Node.js, Express, TypeScript, SQLite3** | Manejo de la lógica del servidor, API REST y base de datos. |
| **Frontend** | **HTML, CSS, JavaScript (Vanilla)** | Interfaz de usuario y lógica del lado del cliente. |



## 🚀 Empezando

Sigue estas instrucciones para obtener una copia del proyecto y ponerlo en funcionamiento en tu máquina local.

### 📋 Prerrequisitos

Necesitarás tener instalado lo siguiente en tu sistema:

* **Node.js** (Se recomienda la versión LTS)
* **npm** (Gestor de paquetes de Node.js, viene incluido con Node.js)
* Un editor de código (ej: VS Code).

### 🛠️ Instalación y Configuración

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/TiziRR/entrega-parcial-web.git
    cd HITOCEAN
    ```

2.  **Configurar el Backend:**
    El backend se encuentra en la carpeta `backend/` y está desarrollado en **TypeScript**.

    a. **Instalar Dependencias:**
    ```bash
    cd backend
    npm install
    ```

    b. **Compilar el Código:**
    Aunque el comando `dev` usa `ts-node-dev`, es buena práctica saber compilar el proyecto. Esto genera los archivos JavaScript en la carpeta `dist/`.
    ```bash
    npm run build
    ```

## ⚙️ Uso y Comandos

Debes iniciar el **Backend** y el **Frontend** por separado para que la aplicación funcione completamente.

### 1. Iniciar el Backend (Servidor API)

Para el desarrollo, utiliza el comando `dev`. Esto inicia el servidor y lo reinicia automáticamente al detectar cambios en los archivos `.ts`.

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | **Recomendado para desarrollo.** Inicia el servidor usando `ts-node-dev` para recargas en vivo. |
| `npm start` | Inicia el servidor de producción desde los archivos compilados en `dist/`. Útil después de `npm run build`. |

**Ejecución:**

```bash
# Asegúrate de estar en la carpeta 'backend'
cd backend
npm run dev
El servidor API se ejecutará en http://localhost:[PUERTO_DEFINIDO] (ej: 3000 o 8080).

### 2. Iniciar el Frontend (Web)


¡Perfecto! Con la estructura de carpetas y el contenido del archivo package.json, tengo toda la información necesaria para crear un README.md claro y completo.

Este README explica qué es el proyecto, cómo configurarlo e instalarlo, y los comandos necesarios para poner en marcha el frontend y el backend.

📝 Borrador del Archivo README.md
Aquí tienes el contenido en formato Markdown:

Markdown
# 🌊 HITOCEAN Clone (Educacional)

![Badge de Estado](https://img.shields.io/badge/STATUS-Completado%20o%20En%20Desarrollo-blue)
![Badge de Tecnolog%C3%ADas](https://img.shields.io/badge/Tecnolog%C3%ADas-Node.js%2C%20Express%2C%20TypeScript%2C%20SQLite3%2C%20HTML%2FCSS-informational)

## 🌟 Descripción del Proyecto

Este proyecto es una **copia con fines educativos** de la página web oficial de [**HITOCEAN**](https://hitocean.com/en/). Su objetivo es demostrar la implementación de una aplicación **Full-Stack** utilizando tecnologías modernas.

### Tecnologías Clave Usadas:

| Componente | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Backend** | **Node.js, Express, TypeScript, SQLite3** | Manejo de la lógica del servidor, API REST y base de datos. |
| **Frontend** | **HTML, CSS, JavaScript (Vanilla)** | Interfaz de usuario y lógica del lado del cliente. |

## 🚀 Empezando

Sigue estas instrucciones para obtener una copia del proyecto y ponerlo en funcionamiento en tu máquina local.

### 📋 Prerrequisitos

Necesitarás tener instalado lo siguiente en tu sistema:

* **Node.js** (Se recomienda la versión LTS)
* **npm** (Gestor de paquetes de Node.js, viene incluido con Node.js)
* Un editor de código (ej: VS Code).

### 🛠️ Instalación y Configuración

1.  **Clonar el Repositorio:**
    ```bash
    git clone [https://www.youtube.com/watch?v=t_yOKbQkgPo](https://www.youtube.com/watch?v=t_yOKbQkgPo)
    cd HITOCEAN
    ```

2.  **Configurar el Backend:**
    El backend se encuentra en la carpeta `backend/` y está desarrollado en **TypeScript**.

    a. **Instalar Dependencias:**
    ```bash
    cd backend
    npm install
    ```

    b. **Compilar el Código:**
    Aunque el comando `dev` usa `ts-node-dev`, es buena práctica saber compilar el proyecto. Esto genera los archivos JavaScript en la carpeta `dist/`.
    ```bash
    npm run build
    ```

3.  **Configurar el Frontend:**
    El frontend se encuentra en la carpeta `frontend/` y no requiere pasos de instalación adicionales, ya que usa HTML, CSS y JS puro.

    ```bash
    cd ../frontend
    # No se requiere instalación aquí
    ```

## ⚙️ Uso y Comandos

Debes iniciar el **Backend** y el **Frontend** por separado para que la aplicación funcione completamente.

### 1. Iniciar el Backend (Servidor API)

Para el desarrollo, utiliza el comando `dev`. Esto inicia el servidor y lo reinicia automáticamente al detectar cambios en los archivos `.ts`.

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | **Recomendado para desarrollo.** Inicia el servidor usando `ts-node-dev` para recargas en vivo. |
| `npm start` | Inicia el servidor de producción desde los archivos compilados en `dist/`. Útil después de `npm run build`. |

**Ejecución:**

```bash
# Asegúrate de estar en la carpeta 'backend'
cd backend
npm run dev
El servidor API se ejecutará en http://localhost:[PUERTO_DEFINIDO] (ej: 3000 o 8080).

### Iniciar el Frontend (Web)
El frontend es una aplicación de navegador simple.

Navega a la carpeta del frontend:

Bash

cd frontend
Abrir en el Navegador: Abre el archivo index.html haciendo doble clic en él o usa una extensión de servidor web local (como "Live Server" en VS Code) para evitar problemas de CORS y rutas.