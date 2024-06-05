

function clicou(){

        // imagens
       img= document.getElementById('imgm')
        // div imagem 
        var divImagem = document.getElementById("imagem")
        var texto=document.getElementById("txt")
        //body
        var corpo = window.document.body
        // numero digitado 
        var nDigitado=window.document.getElementById("inumero")
        var nascimento= nDigitado.value
        // ano atual
        var data = new Date()
        var ano =  data.getFullYear()
        //Idade 
        var idade = ano- nascimento
        // verificação de compo vazio ou maior que a idade
        if(nascimento.length == 0 || nascimento > ano){
                        window.alert("ERRO!")

        }else
        {       
                // radio com o genero
                var fSex= document.getElementsByName("sexo")
                
                // genero
                var genero =''

                

                if(fSex[0].checked){
                        genero ="Homem"

                       
                      
                        


                if(idade <= 5 ){
                                //bebe
                                texto.innerHTML=`Detectamos um ${genero} de ${idade} anos`
                                divImagem.style.display="flex"
                                img.src='bebe-homem.webp'


                } else if(idade >5 && idade <=10){
                                //criança
                                texto.innerHTML=`Detectamos um ${genero} de ${idade} anos`
                                divImagem.style.display="flex"
                                img.src="criança-menino.jpeg"



                }else if(idade >10 && idade<18){
                        // Adolecente
                        texto.innerHTML=`Detectamos um ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="adolecente-menino.webp"




                }else if(idade >=18 && idade <30){
                        //jovem

                        texto.innerHTML=`Detectamos um ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="jovem-homem.jpeg"



                }else if (idade >=30 && idade < 60){
                        //Adulto


                        texto.innerHTML=`Detectamos um ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="homem-adulto.webp"



                }else if(idade >=60){
                        //velho

                        texto.innerHTML=`Detectamos um ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="homem-velho.jpeg"

                }
                        

                }else if (fSex[1].checked){

                        genero="Mulher"
                        
                        

                if(idade <= 5 ){
                                //bebe

                                texto.innerHTML=`Detectamos um ${genero} de ${idade} anos`
                                divImagem.style.display="flex"
                                img.src="bebe-menina.jpeg"


                } else if(idade >5 && idade <=10){
                                //criança


                                texto.innerHTML=`Detectamos uma ${genero} de ${idade} anos`
                                 divImagem.style.display="flex"
                                img.src="criança-menina.webp"



                }else if(idade >10 && idade<18){
                        // Adolecente


                        texto.innerHTML=`Detectamos uma ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="adolecente-menina.webp"



                }else if(idade >=18 && idade <30){
                        //jovem

                        texto.innerHTML=`Detectamos uma ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="jovem-menina.webp"



                }else if (idade >=30 && idade < 60){
                        //Adulto


                        texto.innerHTML=`Detectamos uma ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="mulher-adulta.webp"



                }else if(idade >=60){
                        //velho

                        texto.innerHTML=`Detectamos uma ${genero} de ${idade} anos`
                        divImagem.style.display="flex"
                        img.src="mulher-velha.jpeg"

                }
                        
                }

                        

                
                        




        }
      






}