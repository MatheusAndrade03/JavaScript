

function carregar(){

var  data = new Date()
var  hora = data.getHours()
var img = window.document.getElementById('imgHoras')
var horas = window.document.getElementById('horas')
var corpo= window.document.body

if( hora >=5 && hora < 12){

  horas.innerHTML=`Agora são ${hora} Horas`
  img.src="manha.jpeg"
  corpo.style.backgroundColor="#ffdaac"


}
else if( hora < 5 || hora > 19 ){
   horas.innerHTML=`Agora são ${hora} Horas`
   corpo.style.backgroundColor="#372b48"
  
   img.src="noite.jpeg"
}else if(hora <= 19){

   horas.innerHTML=`Agora são ${hora} Horas`
  img.src="tarde.jpeg"
  corpo.style.backgroundColor="#ad7646"
  

}






}
