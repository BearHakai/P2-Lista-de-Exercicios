//Pede ao usuario as notas para calcular a media
var nota1 = parseFloat(prompt("Informe a sua primeira nota: "));
var nota2 = parseFloat(prompt("Informe a sua segunda nota: "));
var media = (nota1 + nota2) / 2;

//Comceca a decisao para informar qual a nota baseado na media
if(media >= 9.0 && media <=10.0){
    alert("Parabéns, você tirou A!" + "\nNota: " + media);
    console.log("Parabéns, você tirou A!" + "\nNota: " + media);
}

else if(media >= 7.5 && media <=8.9){
    alert("Parabéns, você tirou B!" + "\nNota: " + media);
    console.log("Parabéns, você tirou B!" + "\nNota: " + media);
}

else if(media >= 6.0 && media <=7.4){
    alert("Você tirou C, está na média" + "\nNota: " + media);
    console.log("Você tirou C, está na média" + "\nNota: " + media);
}

else if(media >= 4.0 && media <=5.9){
    alert("Você tirou D, precisa estudar mais!" + "\nNota: " + media);
    console.log("Você tirou D, precisa estudar mais!" + "\nNota: " + media);
}

else if(media >= 4.0 && media <=0.0){
    alert("Você tirou F, precisa estudar mais!" + "\nNota: " + media);
    console.log("Você tirou F, precisa estudar mais!" + "\nNota: " + media);
}

else{
    alert("Não é uma nota válida!");
    console.log("Não é uma nota válida!");
}
