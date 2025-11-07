import { Router } from "express";
import {
  createGrupo,
  readGrupo,
  updateGrupo,
  deleteGrupo,
  readAllGrupos
} from "../controllers/grupoController.js";

const router = Router();

router.post('/grupos/create', createGrupo);
router.post('/grupos/read', readGrupo);
router.put('/grupos/update', updateGrupo);
router.delete('/grupos/delete', deleteGrupo);
router.get('/grupos/readall', readAllGrupos);

export { router };