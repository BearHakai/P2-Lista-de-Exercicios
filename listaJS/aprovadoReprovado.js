//Pede ao usuario o valor a ser calculado
var nota1 = parseFloat(prompt("Informe sua primeira nota: "));
var nota2 = parseFloat(prompt("Informe sua segunda nota: "));
var media = nota1 / nota2;

//Comeca uma decisao para saber qual das condicoes sera verdadeira
if(media > 10){
    alert("Está nota é inválida!");
    console.log("Está nota é inválida!");
}
else if(media == 10){
    alert("Aprovado com Distinção");
    console.log("Aprovado com Distinção");
}
else if(media <= 9.9 && media >= 7){
    alert("Aprovado!");
    console.log("Aprovado!");
}
else if(media <= 6.9){
    alert("Reprovado!");
    console.log("Reprovado!");
}
else{
    alert("Não digitou um número ou é inválido!");
    console.log("Não digitou um número ou é inválido!");
}