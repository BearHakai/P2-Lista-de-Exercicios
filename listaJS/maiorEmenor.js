//Pede ao usuario valores para fazer a verificacao
var number1 = parseFloat(prompt("Informe o primeiro número: "));
var number2 = parseFloat(prompt("Informe o segundo número: "));
var number3 = parseFloat(prompt("Informe o terceiro número: "));

//Pega o valor que o usuario informou e verifica qual deles está correto
if(number1 > number3 && number2 < number3){
    alert("O maior número é " + number1 + " e o menor é " + number2);
    console.log("O maior número é " + number1 + " e o menor é " + number2);
}
else if(number1 > number2 && number3 < number2){
    alert("O maior número é " + number1 + " e o menor é " + number3);
    console.log("O maior número é " + number1 + " e o menor é " + number3);
}
else if(number2 > number1 && number1 < number3){
    alert("O maior número é " + number2 + " e o menor é " + number1);
    console.log("O maior número é " + number2 + " e o menor é " + number1);
}
else if(number2 > number3 && number1 > number3){
    alert("O maior número é " + number2 + " e o menor é " + number3);
    console.log("O maior número é " + number2 + " e o menor é " + number3);
}
else if(number3 > number1 && number2 < number1){
    alert("O maior número é " + number3 + " e o menor é " + number2);
    console.log("O maior número é " + number3 + " e o menor é " + number2);
}
else if(number3 > number2 && number1 < number2){
    alert("O maior número é " + number3 + " e o menor é " + number1);
    console.log("O maior número é " + number3 + " e o menor é " + number1);
}
else if (number1 == number2 && number2 == number3){
    alert("Eles são números iguais!");
    console.log("Eles são números iguais!");
}
else{
    alert("Não é um número válido");
    console.log("Não é um número válido");
}