// src/routes/index.js
import { Router } from "express";

// Inicializa el enrutador principal
const router = Router();

// Importación de rutas principales
import productsRouter from "./products.routes.js";
import cartsRouter from "./carts.routes.js";
import usersRouter from "./users.routes.js";
import adoptionRouter from "./adoption.router.js";
import authRouter from './auth.routes.js';

// Rutas principales de la API
router.use("/products", productsRouter);
router.use("/carts", cartsRouter);
router.use("/users", usersRouter);
router.use("/adoptions", adoptionRouter);
router.use('/auth', authRouter);

// Ruta base de verificación
router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Bienvenido a la API del proyecto E-commerce Backend",
    endpoints: {
      products: "/api/products",
      carts: "/api/carts",
      users: "/api/users",
      adoptions: "/api/adoptions"
    }
  });
});

// Manejo de rutas no encontradas
router.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Ruta no encontrada",
  });
});

export default router;





