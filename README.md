# Proyecto E-commerce Backend

Este proyecto es la entrega final del curso de Full Stack. Se trata de un backend desarrollado con **Node.js**, **Express**, **MongoDB Atlas**, y **Passport JWT** para autenticación. La aplicación está documentada con **Swagger** y **dockerizada** para despliegue rápido.

---

## 🔹 Contenido del Proyecto

- `src/` - Código fuente del backend
  - `controllers/` - Controladores de los endpoints
  - `models/` - Modelos de MongoDB
  - `routes/` - Rutas del API
  - `config/` - Configuraciones de DB, Passport y Swagger
  - `docs/` - Documentación Swagger en YAML
- `test/` - Tests funcionales con **Mocha**, **Chai** y **Supertest**
- `.env` - Variables de entorno
- `Dockerfile` - Configuración para dockerizar la app

---

## 🔹 Tecnologías utilizadas

- Node.js 24.x
- Express 4.x
- MongoDB Atlas
- Mongoose
- Passport JWT
- Swagger (OpenAPI 3.0)
- Docker
- Mocha + Chai + Supertest

---

## 🔹 Variables de entorno (`.env`)

```env
MONGO_URI=mongodb+srv://emidethtm90_db_user:aldRWpet6pWIqA5x@cluster0.6oqsh4w.mongodb.net/ecommerceDB?retryWrites=true&w=majority
PORT=8080
DB_NAME=ecommerce
JWT_SECRET=mi_clave_secreta_super_segura


Instalación local
Clonar el repositorio:
git clone https://github.com/emilianocabrera90/Java3Final
cd proyecto-ecommerce-backend


Instalar dependencias:
npm install
Ejecutar el proyecto en modo desarrollo:
npm run dev
Acceder a la API en:
http://localhost:8080/api

Documentación Swagger disponible en:
http://localhost:8080/api/docs


Ejecutar Tests
Para correr los tests funcionales (router adoptions.router.js):
npm test
Se verifican todos los endpoints de adopciones, incluyendo casos de éxito y errores.


Dockerización
Construir imagen Docker:
docker build -t emideth90/proyecto-ecommerce-backend:1.0.0 .
Ejecutar contenedor:
docker run -p 8080:8080 emideth90/proyecto-ecommerce-backend:1.0.0
El servidor estará disponible en:
http://localhost:8080

Docker Hub
La imagen del proyecto está disponible en Docker Hub:
https://hub.docker.com/repository/docker/emideth90/proyecto-ecommerce-backend

Endpoints principales
/api/products - Gestión de productos
/api/carts - Gestión de carritos
/api/users - Gestión de usuarios y autenticación
/api/adoptions - Gestión de adopciones
Todos los endpoints están documentados con Swagger.

Repositorio GitHub
Código fuente disponible en:
https://github.com/emilianocabrera90/Java3Final

Autor
Emiliano Cabrera

Notas finales
La API está lista para producción.
Todos los endpoints de adopciones tienen tests funcionales completos.
La imagen Docker está subida y lista para ejecutar sin necesidad de instalar Node.js ni dependencias localmente.