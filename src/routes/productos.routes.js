import { Router } from "express";

import { traerProductos, 
        traerProductosCodigo,
        traerProductosNombre
     } from "../controllers/productos.controller";

const router = Router();

router.get('/productos', traerProductos);

router.get('/productosCodigo', traerProductosCodigo);

router.get('/productosNombre', traerProductosNombre);

export default router