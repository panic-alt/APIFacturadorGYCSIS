import { Router } from "express";
import { establecerConexion, sql } from "../database/conexion";

import { traerClientePorID, traerClientePorRS, traerClientePorCUIT, traerClientes } from "../controllers/clientes.controller";

const router = Router();

router.get('/clientes', traerClientes);
router.get('/clientesCodigoInterno', traerClientePorID);
router.get('/clientesRazonSocial', traerClientePorRS);
router.get('/clientesCUIT', traerClientePorCUIT);

export default router