 var data =  new Date()
 var horas = data.getHours()

if( horas > 5 && horas <= 12 ){

    console.log(`São ${horas}H , tenha um bom dia `)




}else if (horas < 5){

    console.log(`São ${horas}H, è madrugada`)

    





}else if(horas <=18){

    console.log(`São ${horas}H , tenha uma boa tarde `)
    


}else{

    console.log(`São ${horas}H, tenha uma boa noite `)
    
}