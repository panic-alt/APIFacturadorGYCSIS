import { establecerConexion, sql } from "../database/conexion";

export async function grabarComprobanteEncabezado(req, res) {

    const pool = await establecerConexion();

    const numeroVenta = Math.floor(Math.random() * 100) + 1;

    console.log(numeroVenta)
    
    console.log(req.body)

    const {codigoInterno, rSocial} = req.body

    const result = await pool
        .request()
        .input('Ent_id', sql.Int, codigoInterno)
        .input('VEN_ClienteDetalle', sql.NVarChar, rSocial)
        .query(`INSERT INTO MER_POSJ.dbo.F_VENTAS_POS 
                (VEN_Id, 
                CTI_ID, 
                VEN_Numero, 
                Ent_id, 
                VEN_ClienteDetalle,
                VEN_Fecha,
                VEN_Tipo_Pago,
                Ent_idVendedor)
            OUTPUT INSERTED.VEN_Id 
            VALUES (NEWID(), 11, 1, @Ent_id, @VEN_ClienteDetalle, getdate(), 1, 1);`)
    

    res.json(result.recordset)

}

export async function grabarComprobanteArticulos (req, res) {
    
    const pool = await establecerConexion();

    console.log("PRINT REQ.BODY")
    console.log(req.body)
    const ven_id = req.body["VEN_ID"]
    const art_id = req.body["ART_ID"]
    const prd_id = req.body["PRD_ID"]
    const var_id = req.body["VAR_ID"]
    const cantidad = req.body["VIT_Cantidad"]
    const precio = req.body["VIT_Precio"]

    console.log("VALORES")
    console.log({ven_id, art_id,prd_id,var_id, cantidad, precio})
    

    const result = await pool.request()
        .input('VEN_ID', sql.NVarChar, ven_id)
        .input('ART_ID', sql.UniqueIdentifier, art_id)
        .input('VIT_Cantidad', sql.Int, cantidad)
        .input('VIT_Precio', sql.Int, precio)
        .input('PRD_ID', sql.Int, prd_id)
        .input('VAR_ID', sql.Int, var_id)
        .query(`INSERT INTO MER_POSJ.dbo.F_VENTAS_ITEMS_POS 
                            (VEN_ID
                            ,VIT_ID
                            ,ART_ID 
                            ,VIT_Cantidad
                            ,VIT_Precio
                            ,VIT_Vacios
                            ,VIT_VaciosPrecio
                            ,VIT_Vacios1
                            ,VIT_Iva1
                            ,PRD_ID
                            ,VAR_ID)
                VALUES
                        (@VEN_ID
                        ,NEWID()
                        ,@ART_ID
                        ,@VIT_Cantidad
                        ,@VIT_Precio
                        ,0
                        ,0
                        ,0
                        ,0
                        ,@PRD_ID
                        ,@VAR_ID)`)
    res.json(result.recordset)
}