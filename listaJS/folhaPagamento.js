//Informe os dados para calcular as informacoes do calculo do salario
var horas = parseInt(prompt("Informe a quantidade de horas que trabalha no dia: "));
var dias = parseInt(prompt("Informe quantos dias você trabalha no mês: "));
var salarioDia = parseFloat(prompt("Informe quanto você ganha por hora trabalhada: "));
var salario = (horas * salarioDia) * dias;
var imposto;
var sindicado = salario * 0.03;
var fgts = salario * 0.08;
var salarioLiquido;

//Vai comecar as fazer as decisoes de qual sera o desconto do seu salario para mostrar o salario bruto
if(salario <= 2259.20){
    imposto = 0;
    salarioLiquido = salario - imposto - sindicado;
    alert("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
    console.log("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
}

else if(salario >= 2259.21 && salario <= 2826.65){
    imposto = salario * 0.075;
    salarioLiquido = salario - imposto - sindicado;
    alert("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
    console.log("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
}

else if(salario >= 2826.66 && salario <= 3751.05 ){
    imposto = salario * 0.15;
    salarioLiquido = salario - imposto - sindicado;
    alert("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
    console.log("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
}

else if(salario >= 3751.06 && salario <= 4664.68 ){
    imposto = salario * 0.225;
    salarioLiquido = salario - imposto - sindicado;
    alert("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
    console.log("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
}

else if(salario > 4664.68){
    imposto = salario * 0.275;
    salarioLiquido = salario - imposto - sindicado;
    alert("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
    console.log("O Salario: R$ " + salario + "\nO Imposto: R$ " + imposto + "\nO Sindicado: R$ " + sindicado + "\nO FGTS: R$ " + fgts + "O salario final é: R$" + salarioLiquido);
}

else{
    alert("Não é um valor válido!");
    console.log("Não é um valor válido!");
}