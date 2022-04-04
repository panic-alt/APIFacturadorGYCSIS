import { establecerConexion, sql } from "../database/conexion";


export const traerClientes = async (req, res) => {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 
    
    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ENT.ENT_Id codigoInterno,
                                                    ENT.ENT_RazonSocial razonSocial,
                                                    ENT.ENT_Cuit cuit
                                                FROM MER_POSJ.dbo.N_ENTIDADES ENT `)

    res.json(result.recordset)

}

export const traerClientePorID = async (req, res) => {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 

    const dato = req.query.codigoInterno
    
    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ENT.ENT_Id codigoInterno,
                                                    ENT.ENT_RazonSocial razonSocial,
                                                    ENT.ENT_Cuit cuit,
                                                    ENT.ENT_Calle calle,
                                                    ENT.ENT_Nro numeroCalle,
                                                    ENT.ENT_Depto depto,
                                                    ENT.ENT_Piso pisoDepto,
                                                    ENT.ENT_Barrio barrio,
                                                    ENT.ENT_CodigoPostal  codigoPostal,
                                                    CIE.COI_Nombre condicionImpositiva
                                                FROM MER_POSJ.dbo.N_ENTIDADES ENT
                                                INNER JOIN MER_POSJ.dbo.N_CONDICION_IMPOSITIVA CIE 
                                                ON ENT.COI_Id = CIE.COI_Id WHERE  ENT_ID LIKE '%${dato}%'`)

    res.json(result.recordset)

}

export async function traerClientePorRS(req, res) {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 

    const dato = req.query.rSocial;
    
    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ENT.ENT_Id codigoInterno,
                                                    ENT.ENT_RazonSocial razonSocial,
                                                    ENT.ENT_Cuit cuit,
                                                    ENT.ENT_Calle calle,
                                                    ENT.ENT_Nro numeroCalle,
                                                    ENT.ENT_Depto depto,
                                                    ENT.ENT_Piso pisoDepto,
                                                    ENT.ENT_Barrio barrio,
                                                    ENT.ENT_CodigoPostal  codigoPostal,
                                                    CIE.COI_Nombre condicionImpositiva
                                                FROM MER_POSJ.dbo.N_ENTIDADES ENT
                                                INNER JOIN MER_POSJ.dbo.N_CONDICION_IMPOSITIVA CIE 
                                                ON ENT.COI_Id = CIE.COI_Id  WHERE ENT_RazonSocial LIKE '%${dato}%'`);

    res.json(result.recordset)

}

export async function traerClientePorCUIT(req, res) {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 

    const dato = req.query.cuit
    
    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ENT.ENT_Id codigoInterno,
                                                    ENT.ENT_RazonSocial razonSocial,
                                                    ENT.ENT_Cuit cuit,
                                                    ENT.ENT_Calle calle,
                                                    ENT.ENT_Nro numeroCalle,
                                                    ENT.ENT_Depto depto,
                                                    ENT.ENT_Piso pisoDepto,
                                                    ENT.ENT_Barrio barrio,
                                                    ENT.ENT_CodigoPostal  codigoPostal,
                                                    CIE.COI_Nombre condicionImpositiva
                                                FROM MER_POSJ.dbo.N_ENTIDADES ENT
                                                INNER JOIN MER_POSJ.dbo.N_CONDICION_IMPOSITIVA CIE 
                                                ON ENT.COI_Id = CIE.COI_Id  WHERE ENT_CUIT LIKE '%${dato}%'`)

    res.json(result.recordset)

}

export async function confirmarCliente(req, res) {
    
    const pool = await establecerConexion();

    const datoCI = req.query.codigoInterno
    const datoRS = req.query.rSocial

    const datoCuit = req.query.cuit

    const result = await pool.request().query(`SELECT ENT_ID, ENT_NombreFantasia, ENT_RazonSocial, ENT_CUIT FROM N_ENTIDADES WHERE ENT_CUIT LIKE '%${datoCI}%', '%${datoRS}%','%${datoRS}%'`)
}
