import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/users.controller.js';

const router = Router();

/**
 * Rutas de autenticación:
 * POST /api/auth/register -> registrar un usuario
 * POST /api/auth/login    -> login y obtener token
 */
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
