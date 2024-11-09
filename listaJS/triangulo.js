//Pede ao usuario o lado do triangulo para informar seu tipo
var lado1 = parseFloat(prompt("Informe um dos lados do Triângulo: "));
var lado2 = parseFloat(prompt("Informe outro dos lados do Triângulo: "));
var lado3 = parseFloat(prompt("Informe outro dos lados do Triângulo: "));

//faz a decisao e diz ao usuario o tipo do triangulo
if(lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1){
    if(lado1 == lado2 && lado2 == lado3){
        alert("Este é um triângulo equilatero!");
        console.log("Este é um triângulo equilatero!");
    }
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        alert("Este é um triângulo isóceles!");
        console.log("Este é um triângulo isóceles!");
    }
    else if(lado1 != lado2 && lado2 != lado3){
        alert("Este é um triângulo escaleno!");
        console.log("Este é um triângulo escaleno!");
    }
}

else{
    alert("Não é um triângulo!");
    console.logalert("Não é um triângulo!");
}