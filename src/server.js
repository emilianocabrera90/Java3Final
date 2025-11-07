import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { connectDB } from "./config/db.config.js";
import indexRouter from "./routes/index.js";

// Middlewares globales
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notFound.middleware.js";

// 🔹 Cargar variables de entorno
dotenv.config();

// 🔹 Inicializar app
const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Documentación Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proyecto Ecommerce Backend",
      version: "1.0.0",
      description: "API RESTful para el proyecto final de Ecommerce",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./src/docs/**/*.yaml"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 🔹 Rutas principales
app.use("/api", indexRouter);

// 🔹 Rutas no encontradas
app.use(notFound);

// 🔹 Manejo de errores
app.use(errorHandler);

// 🔹 Puerto
const PORT = process.env.PORT || 8080;

// 🔹 Iniciar servidor y conectar base de datos
app.listen(PORT, async () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  await connectDB();
});

export default app; // útil para tests



