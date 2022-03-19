import { establecerConexion } from "../database/conexion";

export const traerProductos = async (req, res) => {
    
    //Llama a la conexion con la BBDD
    const pool = await establecerConexion();

    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ART_ID, ART_DetalleProducto FROM P_ARTICULOS_POS`);

    res.json(result.recordset)
}