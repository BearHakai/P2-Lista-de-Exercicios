//pede ao usuario um valor
var numero = parseInt(prompt("Informe um numero e digo se será Par ou Impar: "));

//verifica se sera um numero
if(!Number(numero)){
    alert("Este não é um número válido, informe outro.");
    console.log("Este não é um número válido, informe outro.");
}

//comeca uma decisao se sera impar ou par
else if(numero % 2 == 0){
    alert("Este é um número Par!");
    console.log("Este é um número Par!");
}

else if(numero % 2 != 0){
    alert("Este é um número Impar!");
    console.log("Este é um número Impar!");
}