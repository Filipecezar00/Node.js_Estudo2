const app = require("express") (); 

const clientes = [
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
    console.log(req.body) 
})

app.listen(3000); 
