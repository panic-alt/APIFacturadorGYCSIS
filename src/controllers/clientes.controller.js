import { establecerConexion, sql } from "../database/conexion";


export const traerClientes = async (req, res) => {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 
    
    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ENT_ID, ENT_RazonSocial, ENT_CUIT FROM N_ENTIDADES`)

    res.json(result.recordset)

}

export const traerClientePorID = async (req, res) => {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 

    const dato = req.query.codigoInterno
    
    //Realiza la consulta a la BBDD
    const result = await pool.request()
        .query(`SELECT ENT_ID, ENT_NombreFantasia, ENT_RazonSocial, ENT_CUIT FROM N_ENTIDADES WHERE  ENT_ID LIKE '%${dato}%'`)

    res.json(result.recordset)

}

export async function traerClientePorRS(req, res) {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 

    const dato = req.query.rSocial;
    
    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ENT_ID, ENT_NombreFantasia, ENT_RazonSocial, ENT_CUIT FROM N_ENTIDADES WHERE ENT_RazonSocial LIKE '%${dato}%'`)

    console.log(result);

    res.json(result.recordset)

}

export async function traerClientePorCUIT(req, res) {
    
    //Llama la conexión con la BBDD
    const pool = await establecerConexion(); 

    const dato = req.query.cuit
    
    //Realiza la consulta a la BBDD
    const result = await pool.request().query(`SELECT ENT_ID, ENT_NombreFantasia, ENT_RazonSocial, ENT_CUIT FROM N_ENTIDADES WHERE ENT_CUIT LIKE '%${dato}%' `)

    res.json(result.recordset)

}