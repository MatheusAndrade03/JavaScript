const user = [
       
    {  nome:"matheus",
        rua: "rua joseph climber",
        numero: 1347,
            endereco:{
        bairro: "Rio do campo",
        cidade: "uberlândia",
        estado: "MG"
            }
        },
        {  
            nome:"matheus",
            rua: "rua joseph climber",
            numero: 1347,
                endereco:{
            bairro: "Rio do campo",
            cidade: "uberlândia",
            estado: "MG"
                }
        }

    ]
    const cores  = {
        azul: "azulinho",
        vermelho: "vermelhinho",
        amarelo: "amarelão"
    }
const array =[1,2,3,4,5,6];
const idades = [10,20,30,40,50,60,70,80,90,100]
const nomes = ["maria","joao","neto","ana","matheus"]


const novo = nomes.map((nome) => {
    return nome= nome+" silva"
})

 const nomesfiltrados = nomes.filter((nome) => {
    return nome !== "matheus"&& nome !== "ana"
    
})


console.log(array.every((numero) => numero>10 ))


/*  
for(let i in user) {   
        for(let  j in user[i]){
            console.log(user[i])
        }

    }
*/

//const {rua,endereco} = user
//console.log(JSON.stringify({rua,endereco}));
