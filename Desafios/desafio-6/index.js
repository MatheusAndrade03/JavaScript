

let num= window.document.getElementById('iInicio')
let lista = window.document.getElementById('select')
let res= window.document.getElementById('res')
let body= window.document.body
 let b= window.document.getElementById('botao')
b.addEventListener('click',clicou)

let armazem = []

function clicou() {
    




 if (num.value.length == 0 || armazem.indexOf(Number(num.value)) != -1) {
        window.alert("Campo vazio ou elemento já existente");
    } else {
        var numero = Number.parseInt(num.value);
        console.log("Número convertido:", numero);

        if (numero >= 0 && numero <= 100) {

            armazem.push(numero)
            console.log("Número adicionado ao armazem:", armazem)
            let item = document.createElement("option")
            item.text=`Valor ${numero} Adicionado `
            lista.appendChild(item)
            res.innerHTML=''



           
            


        } else {
            window.alert("Números de 0 a 100 somente");
        }
    }   
    num.value=''
    num.focus()

}



function ver(){

        if(armazem.length== 0){

            window.alert('Lista vazia')

        }else{
            let tot= armazem.length
            
            let maior=armazem[0]
            let menor=armazem[0]
            let soma=0
            let media=0
            for(let pos in armazem){

                    soma += armazem[pos]

                    if(armazem[pos]>maior)
                    {

                        maior=armazem[pos]

                        
                    }
                    if(armazem[pos]<menor)
                    {
                        menor=armazem[pos]





                    }


            }
            media=soma/tot

            res.innerHTML=``
            res.innerHTML+=`<p>Ao total Temos ${tot} Elementos</p>`
            res.innerHTML+=`O maior valor informado foi : ${maior} <br>`
            res.innerHTML+=`O menor valor informado foi : ${menor}<br>`
            res.innerHTML+=`A soma de tudo  é : ${soma} <br> `
            res.innerHTML+=` A Media é : ${media}`
        }






}