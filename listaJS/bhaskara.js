//Pede as informacoes para comercar a calcular
var a = parseFloat(prompt("Informe o A da equcação: ax2 + bx + c"));
var x1;
var x2;
var raiz;

//Verifica se o valor for 0, se for 0 para o codigo
if(a == 0){

    alert("Está não é uma equação de segundo grau, portanto não iremos continuar.");
    console.log("Está não é uma equação de segundo grau, portanto não iremos continuar.");
}

//Comeca a realizar o codigo
else if(a != 0){
    
    var b = parseFloat(prompt("Informe o B da equcação: ax2 + bx + c"));
    var c = parseFloat(prompt("Informe o C da equcação: ax2 + bx + c"));
    var delta = (b * b) - 4 * a * c;

    if(delta < 0){
        alert("A equação não possui raízes reais, portanto não iremos continuar." + delta);
        console.log("A equação não possui raízes reais, portanto não iremos continuar.");
    }
    
    else if(delta == 0){
        alert("A equação possui 1 raiz real.");
        console.log("A equação possui 1 raiz real.");

        x1 = (- b + Math.sqrt(delta)) / (2 * a);
        x2 = (- b - Math.sqrt(delta)) / (2 * a);
        
        alert("A respota seria aproximadamente: " + x1);
        console.log("A respota seria aproximadamente: " + x1);
    }
    
    else if(delta > 0){
        alert("A equação possui 2 raizes reais.");
        console.log("A equação possui 2 raizes reais.");

        x1 = (- b + Math.sqrt(delta)) / (2 * a);
        x2 = (- b - Math.sqrt(delta)) / (2 * a);

        alert("A respota seria aproximadamente: " + x1 + " ou " + x2);
        console.log("A respota seria aproximadamente: " + x1 + " ou " + x2);
    }
}