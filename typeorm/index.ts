import "reflect-metadata";
import { AppDataSource } from "./src/data-source";

async function startup(){
    try{
        await AppDataSource.initialize(); 
        console.log("Conexão com o banco de dados estabelecida")
        console.log("Motor do typeorm em utilização") 
    }catch(error){
        console.error("Erro durante a inicialização do Data Source")
        console.error(error) 
    }
}
startup() 