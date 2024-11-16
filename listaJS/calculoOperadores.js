//solicita o numero ao usuario e qual operacao
var number1 = parseFloat(prompt("Informe o primeiro número: "));
var number2 = parseFloat(prompt("Informe o segundo número: "));
var operador = prompt("Informe o tipo de operação que deseja:\n" + "A) Par ou Impar\n" + "B)Positivo ou Negativo\n" + "C)Inteiro ou Decimal(decimal se usa '.' ao invés da virgula)");
var resultado = number1 + number2;

//verifica se este sera um numero
if(!Number(resultado)){
    alert("Não é um número válido, informe outro!");
    console.log("Não é um número válido, informe outro!");
}

//com base no resultado da operacao, faz o calculo para informar
else if(Number(resultado)){
    if(operador == "a" || operador == "A"){
        if(resultado % 2 == 0){
            alert("Este é um número Par!");
            console.log("Este é um número Par!");
        }

        else{
            alert("Este é um número Impar!");
            console.log("Este é um número Impar!");
        }
    }

    else if(operador == "b" || operador == "B"){
        if(resultado < 0){
            alert("Este é um número negativo!");
            console.log("Este é um número negativo!");
        }

        else if(resultado > 0){
            alert("Este é um número positivo!");
            console.log("Este é um número positivo!");
        }

        else if(resultado == 0){
            alert("Este é um número neutro!");
            console.log("Este é um número neutro!");
        }
    }

    else if(operador == "c" || operador == "C"){
        if(Number.isInteger(resultado)){
            alert("É um número inteiro.");
            console.log("É um número inteiro.");
        }

        else{
            alert("É um número decimal.");
            console.log("É um número decimal.");
        }
    }
}