var horas = parseInt(prompt("Informe a quantidade de horas que trabalha no dia: "));
var dias = parseInt(prompt("Informe quantos dias você trabalha no mês: "));
var salarioDia = parseFloat(prompt("Informe quanto você ganha por hora trabalhada: "));
var salario = (horas * salarioDia) * dias;
var imposto;
var sindicado = salario * 0.03;
var fgts = salario * 0.08;

//if(salario > )