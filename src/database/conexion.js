import sql from 'mssql';
import config from "../config";

const confBBDD = {
    user : process.env.USER,
    password : process.env.PASSWORD,
    server : process.env.SERVER,
    database : 'MER_POSJ',
    port : 1433,
    options : {
        encrypt: true,
        trustServerCertificate : true
    }
}

export async function establecerConexion() { 

    try {
        const pool = await sql.connect(confBBDD);
        return pool;
        
    } catch (error) {
        console.error(error);
        
    }
    
}
export {sql};