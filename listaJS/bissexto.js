//Pede o ano para informar se sera bissexto
var ano = parseInt(prompt("Informe um ano e direi se será bissexto: "));

//comcea a decisao de se for um ano informar se sera bissexto ou nao
if(!Number(ano)){
    alert("É uma data inválida");
    console.log("É uma data inválida");
}

else if(ano % 4 == 0){
    alert("O ano é bissexto!");
    console.log("O ano é bissexto!");
}
else{
    alert("Não é um ano Bissexto");
    console.log("Não é um ano Bissexto");
}