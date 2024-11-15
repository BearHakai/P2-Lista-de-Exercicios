//Pede o numero ao usuario para a apresentacao
var number = parseInt(prompt("Informe um número menor que Mil: "));
var centena;
var dezena;
var unidade;

//verifica se srá menor que 999
if(number >= 1000){
    alert("Número inválido!");
    console.log("Número inválido!");
}

//verifica se sera um numero
else if(!Number(number)){
    alert("Número inválido!");
    console.log("Número inválido!");
}

//faz os calculos para apresntar
else if(number < 1000){
    
    centena = number / 100;
    dezena = (number % 100) / 10;
    unidade = ((number % 100) % 10);
    
    centena = parseInt(centena);
    dezena = parseInt(dezena);
    unidade = parseInt(unidade);

    alert(centena + ", " + dezena + ", " + unidade)
}