//pede os numeros para o usuario
var number1 = parseFloat(prompt("Informe o primeiro número: "));
var number2 = parseFloat(prompt("Informe o segundo número: "));
var number3 = parseFloat(prompt("Informe o terceiro número: "));

//verifica qual deles sera o maior para colocar em ordem
    if(number1 > number2 && number1 > number3){
        if(number2 > number3){
            alert("Os números em ordem Descrescente são: " + number1 + ", " + number2 + ", " + number3);
            console.log("Os números em ordem Descrescente são: " + number1 + ", " + number2 + ", " + number3);
        }
        else if(number2 < number3){
            alert("Os números em ordem Descrescente são: " + number1 + ", " + number3 + ", " + number2);
            console.log("Os números em ordem Descrescente são: " + number1 + ", " + number3 + ", " + number2);
        }
    }
    else if(number2 > number1 && number2 > number3){
        if(number1 > number3){
            alert("Os números em ordem Descrescente são: " + number2 + ", " + number1 + ", " + number3);
            console.log("Os números em ordem Descrescente são: " + number2 + ", " + number1 + ", " + number3);
        }
        else if(number1 < number3){
            alert("Os números em ordem Descrescente são: " + number2 + ", " + number3 + ", " + number2);
            console.log("Os números em ordem Descrescente são: " + number2 + ", " + number3 + ", " + number2);
        }
    }
    else if(number3 > number2 && number3 > number1){
        if(number2 > number1){
            alert("Os números em ordem Descrescente são: " + number3 + ", " + number2 + ", " + number1);
            console.log("Os números em ordem Descrescente são: " + number3 + ", " + number2 + ", " + number1);
        }
        else if(number2 < number1){
            alert("Os números em ordem Descrescente são: " + number3 + ", " + number1 + ", " + number2);
            console.log("Os números em ordem Descrescente são: " + number3 + ", " + number1 + ", " + number2);
        }
    }
    else{
        alert("Não é um número válido!");
        console.log("Não é um número válido!");
    }