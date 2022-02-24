export class Negociacao {
 
    constructor(   
        private  _data: Date, 
         private readonly quantidade:number, 
         private readonly valor:number){ }

    get volume ():number{
        return this.quantidade * this.valor;
    }
    get data(): Date{
        // Clone da data, quando modificada muda a copia
        const data = new Date(this._data.getTime());
        return data;
    }
}