import {Router} from 'express';

import { grabarComprobanteEncabezado, grabarComprobanteArticulos } from "../controllers/comprobantes.controller";

const router = Router();

router.post('/comprobanteEncabezado', grabarComprobanteEncabezado);
router.post('/comprobanteArticulos', grabarComprobanteArticulos);

export default router
