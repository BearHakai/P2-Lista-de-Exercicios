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

    //comeca as decisoes para verificar e apresentar para o usuario a resposta
    if(centena != 0 && dezena != 0 && unidade != 0){
        alert("São: \n" + centena + " centenas.\n" + dezena + " dezenas.\n" + unidade + " unidades.");
        console.log("São: \n" + centena + " centenas.\n" + dezena + " dezenas.\n" + unidade + " unidades.");
    }

    else if(centena != 0 && dezena == 0 && unidade != 0){
        alert("São: \n" + centena + " centenas.\n" + unidade + " unidades.");
        console.log("São: \n" + centena + " centenas.\n" + unidade + " unidades.");
    }

    else if(centena != 0 && dezena != 0 && unidade == 0){
        alert("São: \n" + centena + " centenas.\n" + dezena + " dezenas.");
        console.log("São: \n" + centena + " centenas.\n" + dezena + " dezenas.");
    }

    else if(centena != 0 && dezena == 0 && unidade == 0){
        alert("São: \n" + centena + " centenas.");
        console.log("São: \n" + centena + " centenas.");
    }

    else if(centena == 0 && dezena != 0 && unidade != 0){
        alert("São: \n" + dezena + " dezenas.\n" + unidade + " unidades.");
        console.log("São: \n" + dezena + " dezenas.\n" + unidade + " unidades.");
    }

    else if(centena == 0 && dezena != 0 && unidade == 0){
        alert("São: \n" + dezena + " dezenas.");
        console.log("São: \n" + dezena + " dezenas.");
    }

    else if(centena == 0 && dezena == 0 && unidade != 0){
        alert("São: \n" + unidade + " unidades.");
        console.log("São: \n" + unidade + " unidades.");
    }
}