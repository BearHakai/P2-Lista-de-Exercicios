//As variaveis servem para pedir um numero ao usuario
var number1 = parseFloat(prompt("Diga um número: "));
var number2 = parseFloat(prompt("Diga outro número: "));

//O if comeca uma decisao para dizer qual deles e maior
if(number1 > number2){
    alert("O primeiro número que você falou é maior, sendo " + number1 + " > " + number2);
    console.log("O primeiro número que você falou é maior, sendo " + number1 + " > " + number2);
}
else if(number2 > number1){
    alert("O primeiro número que você falou é maior, sendo " + number2 + " > " + number1);
    console.log("O primeiro número que você falou é maior, sendo " + number2 + " > " + number1);
}
else if(number1 == number2){
    alert("Os dois são números iguais, sendo: " + number1 + " = " + number2);
    console.log("Os dois são números iguais, sendo: " + number1 + " = " + number2);
}
else{
    alert("Não é um número válido");
    console.log("Não é um número válido");
}