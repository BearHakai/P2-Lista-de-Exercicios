//pede ao usuario um valor para fazer a verificacao
var letra = prompt("Digite uma letra e direi se é Vogal ou Consoante: ");

//Faz a decisao se vai ser vogal ou nao
if(letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "O" || letra == "o" || letra == "u" || letra == "U"){
    alert("Você digitou uma Vogal!");
    console.log("Você digitou uma Vogal!");
}
else if(letra >= 0 || letra <= 0){
    alert("Você não digitou uma letra");
    console.log("Você não digitou uma letra");
}
else{
    alert("Você digitou uma Consoante!");
    console.log("Você digitou uma Consoante!");
}