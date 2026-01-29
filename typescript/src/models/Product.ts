import {uuid} from "uuidv4"; 

export default class Product {
    id:string; 
    code:number; 
    description:string; 
    buyPrice:number; 
    sellPrice:number 
    tags:Array<Product>; 
    lovers:number; 

    constructor({
        buyPrice, 
        code,
        description,
        lovers, 
        sellPrice, 
        tags, 
    }:Omit<Product,'id'>){
        this.buyPrice = buyPrice; 
        this.code = code; 
        this.description = description; 
        this.sellPrice = sellPrice; 
        this.lovers = lovers; 
        this.tags = tags; 
        this.id = uuid()
    }

}
