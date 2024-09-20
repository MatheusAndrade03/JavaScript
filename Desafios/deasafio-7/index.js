

const btnGo = document.querySelector("#btn-vai")
const valor = document.querySelector("#inumero")
const img = document.querySelector("#img")
const conteudo = document.querySelector("#content")

// functions 

 function  fetchApi(value){

const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
.then((res)=> res.json())
.then((data)=> {
    
    console.log(data)
    return  data;
})
return result
}
// botão
btnGo.addEventListener("click", async (event)=>{
    event.preventDefault();

    const resultado = await fetchApi(valor.value)

    conteudo.textContent= `${JSON.stringify (resultado,undefined,2)}`;
    img.src=`${resultado.image}`

})

