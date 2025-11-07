// src/models/adoption.model.js
import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  adopterName: { type: String, required: true },
  adoptionDate: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Adoption = mongoose.model("Adoption", adoptionSchema);

export default Adoption;
