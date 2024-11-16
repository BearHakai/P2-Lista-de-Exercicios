//Pede ao usuaorio o valor que ira sacar
var saque = parseFloat(prompt("Informe o quanto gostaria de sacar: "));
var notaCem = 0;
var notaCinquenta = 0;
var notaDez = 0;
var notaCinco = 0;
var notaUm = 0;

//comeca uma decisao se vai ou nao sacar devido ao valor minimo e o maximo
if(saque > 600){
    alert("Não é um saque válido, o valor maximo é de 600, insira novamente!");
    console.log("Não é um saque válido, o valor maximo é de 600, insira novamente!");
}

//verifica se o que foi digitado sera um numero
else if(!Number(saque)){
    alert("Não é um saque válido, insira novamente!");
console.log("Não é um saque válido, insira novamente!");
}

else if(saque < 10){
    alert("Não é um saque válido, o valor mínimo é de 10, insira novamente!");
    console.log("Não é um saque válido, o valor mínimo é de 10, insira novamente!");
}

//se estiver dentro dos valores, ira fazer os calculos
else if(saque >= 10 && saque <= 600){
    
    //repeticoes para calcular a quantidade das notas
    for (var nCem = saque; nCem > 99; nCem = nCem - 100) {
        notaCem++;
        saque = nCem - 100;
    }

    for (var nCinq = saque; nCinq >= 50; nCinq = nCinq - 50){
        notaCinquenta++;
        saque = nCinq - 50;
    }

    for (var nD = saque; nD >= 10; nD = nD - 10){
        notaDez++;
        saque = nD - 10;
    }

    for (var nCin = saque; nCin >= 5; nCin = nCin - 5){
        notaCinco++;
        saque = nCin - 5;
    }

    for (var nU = saque; nU >= 1; nU = nU - 1){
        notaUm++;
        saque = nU - 1;
    }
    
    //fas as decisoes a partir daqui para dizer quantas notas
    if(notaCem != 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez != 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez != 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez != 0 && notaCinco != 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez == 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez == 0 && notaCinco != 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinco + " notas de 5.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinco + " notas de 5.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez == 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez == 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta == 0 && notaDez == 0 && notaCinco == 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCem + " notas de 100.");
        console.log("Você irá sacar: " + notaCem + " notas de 100.");
    }

    else if(notaCem != 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
    }

    else if(notaCem != 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco != 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
    }

    else if(notaCem != 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco == 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10.");
    }

    else if(notaCem != 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco == 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50.");
        console.log("Você irá sacar: " + notaCem + " notas de 100, " + notaCinquenta + " notas de 50.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaUm + " notas de 1.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco != 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaUm + " notas de 1.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco != 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez != 0 && notaCinco == 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50, " + notaDez + " notas de 10.");
    }

    else if(notaCem == 0 && notaCinquenta != 0 && notaDez == 0 && notaCinco == 0 && notaUm == 0){
        alert("Você irá sacar: " + notaCinquenta + " notas de 50.");
        console.log("Você irá sacar: " + notaCinquenta + " notas de 50.");
    }

    else if(notaCem == 0 && notaCinquenta == 0 && notaDez != 0 && notaCinco != 0 && notaUm != 0){
        alert("Você irá sacar: " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaDez + " notas de 10, " + notaCinco + " notas de 5 e " + notaUm + " notas de 1.");
    }

    else if(notaCem == 0 && notaCinquenta == 0 && notaDez != 0 && notaCinco == 0 && notaUm != 0){
        alert("Você irá sacar: " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
        console.log("Você irá sacar: " + notaDez + " notas de 10, " + notaUm + " notas de 1.");
    }

    else if(notaCem == 0 && notaCinquenta == 0 && notaDez != 0 && notaCinco != 0 && notaUm == 0){
        alert("Você irá sacar: " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
        console.log("Você irá sacar: " + notaDez + " notas de 10, " + notaCinco + " notas de 5.");
    }

    else if(notaCem == 0 && notaCinquenta == 0 && notaDez != 0 && notaCinco == 0 && notaUm == 0){
        alert("Você irá sacar: " + notaDez + " notas de 10.");
        console.log("Você irá sacar: " + notaDez + " notas de 10.");
    }


    else{
        alert("Valor inválido!");
        console.log("Valor inválido!");
    }
}