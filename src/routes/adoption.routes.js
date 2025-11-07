import { Router } from 'express';

const router = Router();

// Simulación de una base de datos temporal
let adoptions = [];

// 📘 GET - obtener todas las adopciones
router.get('/', (req, res) => {
  res.status(200).json(adoptions);
});

// 📘 GET - obtener una adopción por ID
router.get('/:id', (req, res) => {
  const adoption = adoptions.find(a => a.id === req.params.id);
  if (!adoption) return res.status(404).json({ message: 'Adopción no encontrada' });
  res.status(200).json(adoption);
});

// 📗 POST - crear una nueva adopción
router.post('/', (req, res) => {
  const { petName, adopterName } = req.body;
  if (!petName || !adopterName) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  const newAdoption = {
    id: String(adoptions.length + 1),
    petName,
    adopterName,
  };
  adoptions.push(newAdoption);
  res.status(201).json(newAdoption);
});

// 📙 PUT - actualizar una adopción
router.put('/:id', (req, res) => {
  const adoption = adoptions.find(a => a.id === req.params.id);
  if (!adoption) return res.status(404).json({ message: 'Adopción no encontrada' });

  const { petName, adopterName } = req.body;
  adoption.petName = petName || adoption.petName;
  adoption.adopterName = adopterName || adoption.adopterName;

  res.status(200).json(adoption);
});

// 📕 DELETE - eliminar una adopción
router.delete('/:id', (req, res) => {
  const index = adoptions.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Adopción no encontrada' });

  adoptions.splice(index, 1);
  res.status(200).json({ message: 'Adopción eliminada correctamente' });
});

export default router;
