import {Router} from "express"; 
import ProductRepository from "../repositories/ProductRepository"; 
import CreateProductService from "../services/CreateProductService"; 

const productRouter = Router() 
const ProductRepository = new ProductRepository()

productRouter.get("/",(req,res)=>{
    res.json(ProductRepository.findAll()) 
}); 

productRouter.post("/",(req,res)=>{
    try{
        const service = new CreateProductService(ProductRepository); 
        const {
            buyPrice, 
            code, 
            description, 
            lovers, 
            sellPrice, 
            tags, 
            id, 
        } = req.body 
        const produto = service.execute({
            buyPrice, 
            code,
            description,
            lovers, 
            sellPrice,
            tags,
            id, 
        }); 
        res.status(201).json(produto);
    }catch(err){
        return res.status(400).json({Erro:err});  
    }
});

export default productRouter; 
