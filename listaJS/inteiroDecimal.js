//pedir um numero ao usuario
var numero = parseFloat(prompt("Informe um numero e direi se é Decimal ou Inteiro: \nOBS: Caso escreva decimal, use ponto ao invés da virgula."));

//verifica se este numero nao sera uma letra
if(!Number(numero)){
    alert("Não é um número válido, informe outro!");
    console.log("Não é um número válido, informe outro!");
}

//verifica se sera ou não decimal
else if(Number.isInteger(numero)){
    alert("Este número é inteiro!");
    console.log("Este número é inteiro!");
}

else if(!Number.isInteger(numero)){
    alert("Este é um número decimal!");
    console.log("Este é um número decimal!");
}