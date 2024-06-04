

function clicou(){

        // imagens
        var img = document.querySelector("#img")
        // div imagem 
        var divImagem = document.getElementById("imagem")
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

                        divImagem.style.display="flex"
                        divImagem.innerHTML=`Detectamos um ${genero} de ${idade}anos`



                if(idade <= 5 ){
                                //bebe
                               



                } else if(idade >5 && idade <=10){
                                //criança






                }else if(idade >10 && idade<18){
                        // Adolecente






                }else if(idade >=18 && idade <30){
                        //jovem





                }else if (idade >=30 && idade < 60){
                        //Adulto






                }else if(idade >=60){
                        //velho



                }
                        

                }else if (fSex[1].checked){

                        genero="Mulher"
                        divImagem.style.display="flex"
                        divImagem.innerHTML=`Detectamos um ${genero} de ${idade}anos`

                if(idade <= 5 ){
                                //bebe
                               



                } else if(idade >5 && idade <=10){
                                //criança






                }else if(idade >10 && idade<18){
                        // Adolecente






                }else if(idade >=18 && idade <30){
                        //jovem





                }else if (idade >=30 && idade < 60){
                        //Adulto






                }else if(idade >=60){
                        //velho



                }
                        
                }

                        

                
                        




        }
      






}