class Product{
    private id:number; 
    private description:string; 
    private value: number; 

    constructor(id:number,description:string,value:number){
        this.id=id;
        this.description= description;
        this.value= value;
    }
    public getDescription () : string{
        return this.description;
    }
    public setDescription(description:string):void{
        this.description = description; 
    }
}

