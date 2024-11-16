//Pede ao usuario as notas que ira calcular
var nota1 = parseFloat(prompt("Informe sua primeira nota: "));
var nota2 = parseFloat(prompt("Informe sua segunda nota: "));
var nota3 = parseFloat(prompt("Informe sua terceira nota: "));
var media = (nota1 + nota2 + nota3) / 3;

//verifica se o que foi digitado seria um numero
if(!Number(media)){
    alert("Não é uma nota válida, coloque novamente!");
    console.log("Não é uma nota válida, coloque novamente!");
}

//reprova se for menor que 7
else if(media < 7){
    alert("Você foi reprovado!");
    console.log("Você foi reprovado!");
}

//aprova se for entre 7 e 10
else if(media >= 7 && media < 10){
    alert("Você foi aprovado!!");
    console.log("Você foi aprovado!!");
}

//parabeniza se for nota 10
else if(media == 10){
    alert("Você foi aprovado com distinção!!!");
    console.log("Você foi aprovado com distinção!!!");
}

else{
    alert("Não é uma nota válida, coloque novamente!");
    console.log("Não é uma nota válida, coloque novamente!");
}