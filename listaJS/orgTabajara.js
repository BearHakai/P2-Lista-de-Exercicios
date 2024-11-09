//Pede para o usuario o valor que devera ser calculado
var salario = parseFloat(prompt("Informe seu salário: "));
var aumento;
var total;

//Faz as verificacoes para calcular o novo salario
if(salario <= 280.00){
    aumento = salario * 0.20;
    total = salario + aumento;
    alert("O salario anterior: R$ " + salario + "\nPorcentual: 20%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
    console.log("O salario anterior: R$ " + salario + "\nPorcentual: 20%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
}

else if(salario > 280.00 && salario <= 700.00){
    aumento = salario * 0.15;
    total = salario + aumento;
    alert("O salario anterior: R$ " + salario + "\nPorcentual: 15%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
    console.log("O salario anterior: R$ " + salario + "\nPorcentual: 20%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
}

else if(salario > 700.00 && salario <= 1500.00){
    aumento = salario * 0.10;
    total = salario + aumento;
    alert("O salario anterior: R$ " + salario + "\nPorcentual: 10%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
    console.log("O salario anterior: R$ " + salario + "\nPorcentual: 20%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
}

else if(salario > 1500.00){
    aumento = salario * 0.05;
    total = salario + aumento;
    alert("O salario anterior: R$ " + salario + "\nPorcentual: 05%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
    console.log("O salario anterior: R$ " + salario + "\nPorcentual: 20%" + "Aumento aplicado: R$ " + aumento + "\nSalario Final: R$ " + total);
}

//Avisa nao ser um valor valido caso nao informe um numero
else if(!Number(salario)){
    alert("Não é um valor válido!");
    console.log("Não é um valor válido!");
}