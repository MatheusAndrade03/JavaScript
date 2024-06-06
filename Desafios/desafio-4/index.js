






function clicou(){

            var inicio = window.document.querySelector('#iInicio')
            var passo = window.document.querySelector('#iPasso')
            var fim = window.document.querySelector('#iFim')
            var res= window.document.querySelector('#resposta')

            i= Number.parseInt(inicio.value)
            p=Number.parseInt(passo.value)
            f=Number.parseInt(fim.value)            
            if(inicio.value=="" || passo.value=="" || fim.value==""){

                window.alert("Espaços em branco, Por Favor preencha ")









            }else{
                            res.innerHTML="Contando...."

                        if(i < f ){

                                
                                    for(i;i <= f;i=i+p){

                                        res.innerHTML+=` --> ${i} `







                                    }






                        }else if(i > f){


                            for(i;i >= f;i= i-p){

                                res.innerHTML+=` --> ${i} `







                            }





                        }





            }



}