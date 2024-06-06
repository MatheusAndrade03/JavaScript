



function clicou(){

       var numero= window.document.querySelector('#iInicio')
        var res = window.document.querySelector('#resposta')

        res.innerHTML=""
        res.innerHTML="Taboada <br>"

    
        if(numero.value.length==0)
            {
                window.alert("Campo vazio")






        }else {


               var n= Number.parseInt(numero.value)
                

                for(var i=1;i<=10; i++  ){


                   res.innerHTML += `${n}X${i}=${n*i} <br>`


                }

                
















        }






}