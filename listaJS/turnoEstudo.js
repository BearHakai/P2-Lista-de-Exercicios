//informe o valor para a verificacao
var turno = prompt("Informe o turno que você estuda: \n'M' para Matutino\n'T' para Tarde \n'N' para Noturno");

//verifica qual valor serai o correto e mostra uma mensagem
if(turno == "M" || turno == "m"){
    alert("Você estuda de Dia, tenha um bom dia!!");
    console.log("Você estuda de Dia, tenha um bom dia!!");
}
else if(turno == "T" || turno == "t"){
    alert("Você estuda de Tarde, tenha uma boa tarde!!");
    console.log("Você estuda de Tarde, tenha uma boa tarde!!");
}
else if(turno == "N" || turno == "n"){
    alert("Você estuda de Noite, tenha uma boa noite!!");
    console.log("Você estuda de Noite, tenha uma boa noite!!");
}
else{
    alert("Valor inválido!");
    console.logalert("Valor inválido!");   
}