const app = require("express") (); 
const bodyparser = require('body-parser'); 

app.use(bodyparser.json()); 

let clientes = [
    {id:1,nome:"Pedro",telefone:"71 1214-3321"}, 
    {id:2,nome:"Katia",telefone:"71 1334-4133"}, 
    {id:3,nome:"Paulo",telefone:"71 1234-1234"}, 
    {id:4,nome:"João",telefone:"71 3211-4444"} 
];

function log(req,res,next){
const {url,method} = req 
console.log(`${method} - ${url} at ${new Date()}`)
return next() 
}
app.use(log)

// Retorna todos os Clientes
app.get("/users",(req,res)=>{
return res.json(clientes).status(200) 
}); 

//Buscar um unico Recurso 
app.get("/users/:id",(req,res)=>{
const {id} = req.params; 
const client = clientes.find(value=>value.id==id) 
if(client==undefined){
    res.status(400)
}else{
    res.status(200).json(client) 
}
// const user = clientes.filter(value=>value.id == req.params.id);
// res.json(user)
})

// Inserção de Dados
app.post("/users",log,(req,res)=>{
    const cliente = req.body 
    clientes.push(cliente)
    res.json(cliente).status(201) 

})

// Atualizar dados
app.put("/users/:id",log,(req,res)=>{
    const id = req.params.id; 
    const nome = req.body.nome; 
    
    let client = clientes.find(value=>value.id == id); 
    if(client==undefined){
        res.status(400)
    }else{
    client.nome = nome; 
    res.json(client).status(200)   
    }
})

app.delete("/users/:id",(req,res)=>{
    const {id} = req.params; 
    const Index = clientes.findIndex(value=>value.id == id); 
    if(Index == -1){
        res.status(400).send() 
    }else{
        clientes.splice(Index,1) 
        res.status(204).send()
    }
})

app.listen(3000); 
