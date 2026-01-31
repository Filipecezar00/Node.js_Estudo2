import {DataSource} from "typeorm" 

export const AppDataSource = new DataSource({
    type:"postgres", 
    host:"localhost", 
    port:5433,
    username:"postgres", 
    password:"test",
    database:"test",
    synchronize:true,
    entities:["src/entities/*.ts"], 
})