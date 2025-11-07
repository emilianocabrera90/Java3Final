// src/routes/adoption.router.js
import { Router } from "express";
import {
  getAdoptions,
  createAdoption,
  getAdoptionById,
  updateAdoption,
  deleteAdoption
} from "../controllers/adoption.controller.js";

const router = Router();

router.get("/", getAdoptions);
router.post("/", createAdoption);
router.get("/:id", getAdoptionById);
router.put("/:id", updateAdoption);
router.delete("/:id", deleteAdoption);

export default router;


