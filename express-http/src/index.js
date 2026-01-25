const app = require("express") (); 

const clientes = [
    {id:1,nome:"Pedro",telefone:"71 1214-3321"}, 
    {id:2,nome:"Katia",telefone:"71 1334-4133"}, 
    {id:3,nome:"Paulo",telefone:"71 1234-1234"}, 
    {id:4,nome:"João",telefone:"71 3211-4444"} 
];

app.get("/users",(req,res)=>{
return res.json(clientes)
}); 

app.listen(3000); 
