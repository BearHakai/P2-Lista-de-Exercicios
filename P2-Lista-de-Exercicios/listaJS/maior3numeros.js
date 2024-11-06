//Pede um numero ao usuario para fazer a decisao
var number1 = parseFloat(prompt("Informe o primeiro número: "));
var number2 = parseFloat(prompt("Informe o segundo número: "));
var number3 = parseFloat(prompt("Informe o terceiro número: "));

//Faz a verificacao para ver qual deles sera o maior
if(number1 > number2 && number1 > number3){
    alert("O maior dos 3 números é: " + number1);
    console.log("O maior dos 3 números é: " + number1);
}
else if(number2 > number1 && number2 > number3){
    alert("O maior dos 3 números é: " + number2);
    console.log("O maior dos 3 números é: " + number2);
}
else if(number3 > number2 && number3 > number1){
    alert("O maior dos 3 números é: " + number3);
    console.log("O maior dos 3 números é: " + number3);
}
else if(number1 == number2 && number2 == number3){
    alert("Eles são iguais!");
    console.log("Eles são iguais!");
}
else{
    alert("Não é válido!");
    console.log("Não é válido!");
}