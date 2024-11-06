//Pede a letra para verificar
var sexo = prompt("Digite 'M' para masculino ou 'F' para feminino: ");

//Comeca a decisao de qual esta correto
if(sexo == "F" || sexo == "f"){
    alert("O sexo informado é Feminino!");
    console.log("O sexo informado é Feminino!");
}
else if(sexo = "M" || sexo == "m"){
    alert("O sexo informado é Masculino!");
    console.log("O sexo informado é Masculino!");
}
else{
    alert("Não é válido!");
    console.log("Não é válido!");
}