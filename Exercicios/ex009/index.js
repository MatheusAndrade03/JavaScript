let notas = [8,5,9,6,5,3,1,10];
let palavras=["joâo","Matheus","felipe","tami","neto","maria","ana"]


let pessoa={

    nome:'joao',
    idade:20,
    sexo:'masculino',
    cor:"Vermelho"

    };

    let pessoa2={

        nome:'matheus',
        idade:20,
        sexo:'masculino',
        cor:"Azul"
    };

let pessoas=[pessoa,pessoa2]



for(let i in pessoas){
    
    console.log(`pessoa  na posição ${i} :  ${pessoas[i].nome}`)

}

