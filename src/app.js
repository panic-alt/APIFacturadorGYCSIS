import express, {urlencoded} from "express";
import config from "./config";
import cors from 'cors';

import clientesRoutes from "./routes/clientes.routes";
import productosRoutes from "./routes/productos.routes";

const app = express();

//settings
app.set('port', config.port);

//Middlewares
app.use(cors());
app.use(clientesRoutes);
app.use(productosRoutes);
app.use(express.json());
app.use(urlencoded({extended: true}))

export default app