import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import handlebars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";
import initializePassport from "./config/passport.config.js";
import { swaggerSpecs, swaggerUi } from "./config/swagger.config.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

// Passport
initializePassport();
app.use(passport.initialize());

// Swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Rutas
app.use("/api", router);
app.use(express.static(path.join(__dirname, "../public")));

export default app;





