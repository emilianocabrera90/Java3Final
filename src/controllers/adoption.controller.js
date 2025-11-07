// src/controllers/adoption.controller.js
import Adoption from "../models/adoption.model.js";

// GET /api/adoptions
export const getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find();
    res.status(200).json(adoptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/adoptions
export const createAdoption = async (req, res) => {
  try {
    const newAdoption = await Adoption.create(req.body);
    res.status(201).json(newAdoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/adoptions/:id
export const getAdoptionById = async (req, res) => {
  try {
    const adoption = await Adoption.findById(req.params.id);
    if (!adoption) return res.status(404).json({ message: "Adoption not found" });
    res.status(200).json(adoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/adoptions/:id
export const updateAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!adoption) return res.status(404).json({ message: "Adoption not found" });
    res.status(200).json(adoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/adoptions/:id
export const deleteAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByIdAndDelete(req.params.id);
    if (!adoption) return res.status(404).json({ message: "Adoption not found" });
    res.status(200).json({ message: "Adoption deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

