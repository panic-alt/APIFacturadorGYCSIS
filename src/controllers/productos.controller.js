import { establecerConexion } from "../database/conexion";


export async function traerProductos(req, res) {

    //Llama a la conexion con la BBDD
    const pool = await establecerConexion();

    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT PRD_ID, ART_DetalleProducto FROM P_ARTICULOS_POS`);

    res.json(result.recordset)

}

export async function traerProductosNombre(req, res) {

    //Llama a la conexion con la BBDD
    const pool = await establecerConexion();

    const nombreProducto = req.query.nombre

    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT  ART.ART_DetalleProducto,
                                                        ART.ART_Id,
                                                        PRD.PRD_Id codigoInterno, 
                                                        PRD.PRD_Nombre nombreProducto,
                                                        CAL.CAL_Id idCalidad,
                                                        CAL.CAL_Detalle detalleCalidad,
                                                        ENV.ENV_Id idEnvase,
                                                        ENV.ENV_Detalle detalleEnvase,
                                                        TAM.TAM_Id idTamaño,
                                                        TAM.TAM_Detalle detalleTamaño,
                                                        PVAR.VAR_Id idVariedad,
                                                        PVAR.VAR_Detalle detalleVariedad 
                                                FROM MER_POSJ.dbo.P_ARTICULOS_POS ART 
                                                JOIN MER_POSJ.dbo.P_PRODUCTOS_POS PRD 
                                                ON ART.PRD_Id = PRD.PRD_Id 
                                                JOIN MER_POSJ.dbo.P_CALIDAD CAL 
                                                ON ART.CAL_Id = CAL.CAL_Id 
                                                JOIN MER_POSJ.dbo.P_ENVASES ENV 
                                                ON ART.ENV_Id = ENV.ENV_Id
                                                JOIN MER_POSJ.dbo.P_TAMANO TAM 
                                                ON ART.TAM_Id = TAM.TAM_Id 
                                                JOIN MER_POSJ.dbo.P_VARIEDADES_POS PVAR 
                                                ON ART.VAR_Id = PVAR.VAR_Id 
                                                WHERE ART.ART_DetalleProducto LIKE '%${nombreProducto}%'`);

    res.json(result.recordset)
}


export async function traerProductosCodigo(req, res) {

    //Llama a la conexion con la BBDD
    const pool = await establecerConexion();

    const codigoProducto = req.query.codigo

    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT  ART.ART_DetalleProducto, 
                                                    ART.ART_Id,
                                                    PRD.PRD_Id codigoInterno, 
                                                    PRD.PRD_Nombre nombreProducto,
                                                    CAL.CAL_Id idCalidad,
                                                    CAL.CAL_Detalle detalleCalidad,
                                                    ENV.ENV_Id idEnvase,
                                                    ENV.ENV_Detalle detalleEnvase,
                                                    TAM.TAM_Id idTamaño,
                                                    TAM.TAM_Detalle detalleTamaño,
                                                    PVAR.VAR_Id idVariedad,
                                                    PVAR.VAR_Detalle detalleVariedad 
                                                FROM MER_POSJ.dbo.P_ARTICULOS_POS ART 
                                                JOIN MER_POSJ.dbo.P_PRODUCTOS_POS PRD 
                                                ON ART.PRD_Id = PRD.PRD_Id 
                                                JOIN MER_POSJ.dbo.P_CALIDAD CAL 
                                                ON ART.CAL_Id = CAL.CAL_Id 
                                                JOIN MER_POSJ.dbo.P_ENVASES ENV 
                                                ON ART.ENV_Id = ENV.ENV_Id
                                                JOIN MER_POSJ.dbo.P_TAMANO TAM 
                                                ON ART.TAM_Id = TAM.TAM_Id 
                                                JOIN MER_POSJ.dbo.P_VARIEDADES_POS PVAR 
                                                ON ART.VAR_Id = PVAR.VAR_Id 
                                                WHERE ART.ART_DetalleProducto LIKE '%${codigoProducto}%'`);

    res.json(result.recordset)
}


