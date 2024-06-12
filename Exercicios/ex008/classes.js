class pessoa{

    constructor(nome, idade){

        this._nome=nome
        this._idade=idade
    }

    andar(){

            return `${this._nome} esta Andando`
    }

     pular=()=> `${this._nome} Pulou`


    
}


let p = new pessoa('joao',10)

p._nome ='pedro'

console.log(p._nome)