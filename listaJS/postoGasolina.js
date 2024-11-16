//pede ao usuario os valores para o calculo
var tipoGasolina = prompt("Informe o tipo de gasolina: \n Digite 'A' para Alcool e 'G' para Gasolina: ");
var litro = parseInt(prompt("Quantos litros gostaria de colocar?"));
var alcool = 3.90;
var gasolina = 5.50;
var desconto;
var total;

//verifica qual tipo foi o escolhido pelo usuario
if(tipoGasolina == "a" || tipoGasolina == "A"){
    
    //faz os calculos para apresentar ao usuario
    if(litro <= 20){
        total = alcool * litro;
        desconto = total - (total * 0.03);

        alert("O valor total do Alcool seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
        console.log("O valor total do Alcool seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
    }

    else if(litro > 20){
        total = alcool * litro;
        desconto = total - (total * 0.05);

        alert("O valor total do Alcool seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
        console.log("O valor total do Alcool seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
    }

    else if(!Number(litro)){
        alert("Não é um valor válido, tente novamente.");
        console.log("Não é um valor válido, tente novamente.");
    }
}

else if(tipoGasolina == "g" || tipoGasolina == "G"){

    if(litro <= 20){
        total = gasolina * litro;
        desconto = total - (total * 0.04);

        alert("O valor total da Gasolina seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
        console.log("O valor total da Gasolina seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
    }

    else if(litro > 20){
        total = gasolina * litro;
        desconto = total - (total * 0.06);

        alert("O valor total da Gasolina seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
        console.log("O valor total da Gasolina seria: R$ " + total + "\nDevido ao desconto pagara R$ " + desconto);
    }

    else if(!Number(litro)){
        alert("Não é um valor válido, tente novamente.");
        console.log("Não é um valor válido, tente novamente.");
    }
}

else{
    alert("Não é um valor válido, informe novamente.");
    console.log("Não é um valor válido, informe novamente.");
}