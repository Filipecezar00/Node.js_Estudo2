const app = require("express") (); 
const bodyparser = require('body-parser'); 

app.use(bodyparser.json()); 

let clientes = [
    {id:1,nome:"Pedro",telefone:"71 1214-3321"}, 
    {id:2,nome:"Katia",telefone:"71 1334-4133"}, 
    {id:3,nome:"Paulo",telefone:"71 1234-1234"}, 
    {id:4,nome:"João",telefone:"71 3211-4444"} 
];


// Retorna todos os Clientes
app.get("/users",(req,res)=>{
return res.json(clientes)
}); 

//Buscar um unico Recurso 
app.get("/users/:id",(req,res)=>{
const user = clientes.filter(value=>value.id == req.params.id);
res.json(user)
})

// Inserção de Dados
app.post("/users",(req,res)=>{
    const cliente = req.body 
    clientes.push(req.body)
    res.json(cliente) 

})

// Atualizar dados
app.put("/users/:id",(req,res)=>{

    const id = req.params.id; 
    const nome = req.body.nome; 

    let client = clientes.filter(value=>value.id == id); 

    client[0].nome = nome  

    res.json(client[0]);  
})

app.delete("/users/:id",(req,res)=>{
    const id = req.params.id; 
    clientes=clientes.filter(value=>value.id != id);  
    res.json(clientes);  

})

app.listen(3000); 
