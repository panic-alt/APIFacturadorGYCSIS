import express, {urlencoded} from "express";
import config from "./config";
import cors from 'cors';
import bodyParser from 'body-parser';

import clientesRoutes from "./routes/clientes.routes";
import productosRoutes from "./routes/productos.routes";
import comprobantesRoutes from "./routes/comprobantes.routes";

const app = express();

//settings
app.set('port', config.port);

//Middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(clientesRoutes);
app.use(productosRoutes);
app.use(comprobantesRoutes);
app.use(express.json());
app.use(urlencoded({extended: true}))

export default app