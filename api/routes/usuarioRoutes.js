import { Router } from "express";
import {
  createUsuario,
  readUsuario,
  updateUsuario,
  deleteUsuario,
  readAllUsuarios
} from "../controllers/usuarioController.js";

const router = Router();

router.post('/usuarios/create', createUsuario);
router.post('/usuarios/read', readUsuario);
router.put('/usuarios/update', updateUsuario);
router.delete('/usuarios/delete', deleteUsuario);
router.get('/usuarios/readall', readAllUsuarios);

export { router };