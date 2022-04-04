import { Router } from "express";


import { traerClientePorID, traerClientePorRS, traerClientePorCUIT, traerClientes, confirmarCliente } from "../controllers/clientes.controller";

const router = Router();

router.get('/clientes', traerClientes);
router.get('/clientesCodigoInterno', traerClientePorID);
router.get('/clientesRazonSocial', traerClientePorRS);
router.get('/clientesCUIT', traerClientePorCUIT);
router.get('/clientesConfirmado', confirmarCliente)

export default router