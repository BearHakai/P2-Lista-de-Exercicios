//pede as datas para comecar o calculo
var dia = parseInt(prompt("Informe uma data, primeiro diga o Dia: "));
var mes = parseInt(prompt("Informe uma data, depois diga o Mês: "));
var ano = parseInt(prompt("Informe uma data, agora diga o Ano: "));

//comeca verificando se o dia seria valido
if(dia > 31){
    alert("É uma data inválida!");
    console.log("É uma data inválida!");
}

//verifica se o mes sera valido
else if(mes > 12){
    alert("É uma data inválida!");
    console.log("É uma data inválida!");
}

//verifica se o ano sera valido
else if(ano <= 999){
    alert("É uma data inválida!");
    console.log("É uma data inválida!");
}

//verifica se o ano sera bissexto
else if(ano % 4 == 0){

    if(dia > 29 && mes == 2){
        alert("É uma data inválida!");
        console.log("É uma data inválida!"); 
    }

    else if(dia > 30 && mes == 4 || mes == 6 || mes == 9 || mes == 11){
        alert("É uma data inválida!");
        console.log("É uma data inválida!");
    }
    
    else if(!Number(dia) || !Number(mes) || !Number(ano)){
        alert("É uma data inválida!");
        console.log("É uma data inválida!");
    }

    else if(dia == "" || mes == "" || ano == "" || mes <= 0 || ano <= 0 || dia <= 0){
        alert("É uma data inválida!");
        console.log("É uma data inválida!"); 
    }

    else{
        alert(dia + " / " + mes + " / " + ano);
        console.log(dia + " / " + mes + " / " + ano);
    }
}

//verifica se os dias condizem com os meses informados
else if(dia > 28 && mes == 2){
    alert("É uma data inválida!");
    console.log("É uma data inválida!");
}

else if(dia > 30 && mes == 4 || mes == 6 || mes == 9 || mes == 11){
    alert("É uma data inválida!");
    console.log("É uma data inválida!");
}

else if(!Number(dia) || !Number(mes) || !Number(ano)){
    alert("É uma data inválida!");
    console.log("É uma data inválida!");
}

else if(dia == "" || mes == "" || ano == "" || mes <= 0 || ano <= 0 || dia <= 0){
    alert("É uma data inválida!");
    console.log("É uma data inválida!"); 
}

else{
    alert(dia + " / " + mes + " / " + ano);
    console.log(dia + " / " + mes + " / " + ano);
}