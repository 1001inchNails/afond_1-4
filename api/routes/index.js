import { Router } from "express";
import { router as usuarioRouter } from "./usuarioRoutes.js";
import { router as grupoRouter } from "./grupoRoutes.js";
const router = Router();

router.use("/api", usuarioRouter);
router.use("/api", grupoRouter);

export { router };