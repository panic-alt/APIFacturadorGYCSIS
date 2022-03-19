import { Router } from "express";

import { traerProductos } from "../controllers/productos.controller";

const router = Router();

router.get('/productos', traerProductos);

export default router