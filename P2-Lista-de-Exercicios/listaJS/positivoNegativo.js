//As variaveis pedem um valor para fazer a comparacao
var number1 = parseFloat(prompt("Informe um número: "));
var number2 = parseFloat(prompt("Informe outro número: "));

//Comeca uma decisao para dizer qual dele seria positivo ou negativo
if(number1 >= 0 && number2 >= 0){
    alert("O dois números são positivos!");
    console.log("O " + number1 + " é positivo e o " + number2 + " é negativo");
}
else if(number1 >= 0 && number2 < 0 ){
    alert("O " + number1 + " é positivo e o " + number2 + " é negativo");
    console.log("O " + number1 + " é positivo e o " + number2 + " é negativo");
}
else if(number2 >= 0 && number1 < 0 ){
    alert("O " + number2 + " é positivo e o " + number1 + " é negativo");
    console.log("O " + number2 + " é positivo e o " + number1 + " é negativo");
}
else if(number1 < 0 && number2 < 0){
    alert("O dois números são negativos!");
    console.log("O dois números são negativos!");
}
else{
    alert("Não é um número válido");
    console.log("Não é um número válido");
}