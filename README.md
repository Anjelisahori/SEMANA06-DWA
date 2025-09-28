# 📌 Proyecto CRUD con Node.js, Express y MongoDB

Este proyecto es una aplicación web simple que implementa un sistema de **gestión de posts** (crear, listar, editar y eliminar) usando **Node.js, Express, MongoDB y EJS** como motor de plantillas.
El diseño de las vistas está realizado con **Materialize** para una mejor experiencia de usuario.

---

## 🚀 Características principales

* CRUD completo de publicaciones (Posts).
* Validaciones en los modelos con **Mongoose** (título, contenido, hashtags, etc.).
* Manejo de rutas organizado (controladores y servicios separados).
* Vistas dinámicas con **EJS**.
* Estilos responsivos con **Materialize**.

---

## 📂 Estructura del proyecto

```
mongo-node/
│
├── src/
│   ├── controllers/
│   │   └── postController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   └── post.routes.js
│   ├── services/
│   │   └── postService.js
│   └── views/
│       └── posts/
│           ├── index.ejs
│           ├── new.ejs
│           └── edit.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git](https://github.com/Anjelisahori/SEMANA06-DWA.git
   cd SEMANA06-DWA
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar la base de datos MongoDB en `app.js` o con variable de entorno:

   ```js
   const MONGO_URI = "mongodb://localhost:27017/mongo-node";
   ```

4. Ejecutar en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador:

   ```
   http://localhost:3000/posts
   ```

---

## 🛠 Tecnologías utilizadas

* **Node.js** + **Express**
* **MongoDB** + **Mongoose**
* **EJS** (plantillas dinámicas)
* **Materialize CSS** (diseño y componentes)
* **Nodemon** (desarrollo en caliente)

---

## 📖 Funcionalidades

* 📑 **Lista de posts**: muestra todas las publicaciones con título, contenido, hashtags e imagen.
* ➕ **Crear nuevo post**: formulario para añadir publicaciones.
* ✏️ **Editar post**: permite modificar la información de un post.
* 🗑️ **Eliminar post**: elimina una publicación de la base de datos.
* 🔒 **Validaciones**: restricciones en esquemas para asegurar integridad de datos.

---

