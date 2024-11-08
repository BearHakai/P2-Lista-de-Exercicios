//Pede ao usuario o valor dos profutos
var produto1 = parseFloat(prompt("Informe o preço do produto: "));
var produto2 = parseFloat(prompt("Informe o preço do produto: "));
var produto3 = parseFloat(prompt("Informe o preço do produto: "));

//verifica qual deles sera mais barato
if(produto1 < produto2 && produto1 < produto3){
    alert("O produto mais barato é o primeiro, custando R$ " + produto1);
    console.log("O produto mais barato é o primeiro, custando R$ " + produto1);
}
else if(produto2 < produto1 && produto2 < produto3){
    alert("O produto mais barato é o primeiro, custando R$ " + produto2);
    console.log("O produto mais barato é o primeiro, custando R$ " + produto2);
}
else if(produto3 < produto2 && produto3 < produto1){
    alert("O produto mais barato é o primeiro, custando R$ " + produto3);
    console.log("O produto mais barato é o primeiro, custando R$ " + produto3);
}
else if(produto1 <= produto2 && produto1 <= produto3){
    alert("Existe valores iguais, mas o menor preço é: R$ " + produto1);
    console.log("Existe valores iguais, mas o menor preço é: R$ " + produto1);
}
else if(produto2 <= produto1 && produto2 <= produto3){
    alert("Existe valores iguais, mas o menor preço é: R$ " + produto2);
    console.log("Existe valores iguais, mas o menor preço é: R$ " + produto2);
}
else if(produto3 <= produto2 && produto1 >= produto3){
    alert("Existe valores iguais, mas o menor preço é: R$ " + produto3);
    console.log("Existe valores iguais, mas o menor preço é: R$ " + produto3);
}
else{
    alert("Não é um produto válido!");
    console.log("Não é um produto válido!");
}