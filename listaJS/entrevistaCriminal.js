//perfunta ao usuario o valor para a resposta
var telefonou = prompt("Telefonou para a vítima? (S/N)");
var localCrime;
var estaPerto;
var dividas;
var colegas;
var positivo = 0;

//comeca as verificacoes para dizer o resultado ao usuario
if(telefonou == "s" || telefonou == "S" || telefonou == "Sim" || telefonou == "sim" || telefonou == "SIM"){
    positivo++;

    localCrime = prompt("Esteve no loval do crime? (S/N)");

    if(localCrime == "s" || localCrime == "S" || localCrime == "Sim" || localCrime == "sim" || localCrime == "SIM"){
        positivo++;

        estaPerto = prompt("Mora perto da vítima? (S/N)");

        if(estaPerto == "s" || estaPerto == "S" || estaPerto == "Sim" || estaPerto == "sim" || estaPerto == "SIM"){
            positivo++;

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else if(estaPerto == "n" || estaPerto == "N" || estaPerto == "Nao" || estaPerto == "Não" || estaPerto == "NÃO" || estaPerto == "NAO" || estaPerto == "não" || estaPerto == "nao"){

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else{
            alert("Valor inválido, tente novamente");
            console.log("Valor inválido, tente novamente");
        }
    }
    else if(localCrime == "n" || localCrime == "N" || localCrime == "Nao" || localCrime == "Não" || localCrime == "NÃO" || localCrime == "NAO" || localCrime == "não" || localCrime == "nao"){

        estaPerto = prompt("Mora perto da vítima? (S/N)");

        if(estaPerto == "s" || estaPerto == "S" || estaPerto == "Sim" || estaPerto == "sim" || estaPerto == "SIM"){
            positivo++;

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else if(estaPerto == "n" || estaPerto == "N" || estaPerto == "Nao" || estaPerto == "Não" || estaPerto == "NÃO" || estaPerto == "NAO" || estaPerto == "não" || estaPerto == "nao"){

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else{
            alert("Valor inválido, tente novamente");
            console.log("Valor inválido, tente novamente");
        }
    }

    else{
        alert("Valor inválido, tente novamente");
        console.log("Valor inválido, tente novamente");
    }
}

else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){

    localCrime = prompt("Esteve no loval do crime? (S/N)");

    if(localCrime == "s" || localCrime == "S" || localCrime == "Sim" || localCrime == "sim" || localCrime == "SIM"){
        positivo++;

        estaPerto = prompt("Mora perto da vítima? (S/N)");

        if(estaPerto == "s" || estaPerto == "S" || estaPerto == "Sim" || estaPerto == "sim" || estaPerto == "SIM"){
            positivo++;

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else if(estaPerto == "n" || estaPerto == "N" || estaPerto == "Nao" || estaPerto == "Não" || estaPerto == "NÃO" || estaPerto == "NAO" || estaPerto == "não" || estaPerto == "nao"){

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else{
            alert("Valor inválido, tente novamente");
            console.log("Valor inválido, tente novamente");
        }
    }
    else if(localCrime == "n" || localCrime == "N" || localCrime == "Nao" || localCrime == "Não" || localCrime == "NÃO" || localCrime == "NAO" || localCrime == "não" || localCrime == "nao"){

        estaPerto = prompt("Mora perto da vítima? (S/N)");

        if(estaPerto == "s" || estaPerto == "S" || estaPerto == "Sim" || estaPerto == "sim" || estaPerto == "SIM"){
            positivo++;

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else if(estaPerto == "n" || estaPerto == "N" || estaPerto == "Nao" || estaPerto == "Não" || estaPerto == "NÃO" || estaPerto == "NAO" || estaPerto == "não" || estaPerto == "nao"){

            dividas = prompt("Tinha alguma dívida ou pendência com a vítima? (S/N)");

            if(dividas == "s" || dividas == "S" || dividas == "Sim" || dividas == "sim" || dividas == "SIM"){
                positivo++;

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else if(dividas == "n" || dividas == "N" || dividas == "Nao" || dividas == "Não" || dividas == "NÃO" || dividas == "NAO" || dividas == "não" || dividas == "nao"){

                colegas = prompt("Já trabalhou com a vítima? (S/N)");

                if(colegas == "s" || colegas == "S" || colegas == "Sim" || colegas == "sim" || colegas == "SIM"){
                    positivo++;

                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else if(colegas == "n" || colegas == "N" || colegas == "Nao" || colegas == "Não" || colegas == "NÃO" || colegas == "NAO" || colegas == "não" || colegas == "nao"){
                    
                    if(positivo == 5){
                        alert("Você é o Assassino!");
                    }

                    else if(positivo >= 3 && positivo <= 4){
                        alert("Você é um cumplice!");
                    }

                    else if(positivo == 2){
                        alert("Você é um suspeito!");
                    }

                    else if(positivo < 2){
                        alert("Você é Inocente!");
                    }
                }

                else{
                    alert("Valor inválido, tente novamente");
                    console.log("Valor inválido, tente novamente");
                }
            }

            else{
                alert("Valor inválido, tente novamente");
                console.log("Valor inválido, tente novamente");
            }
        }

        else{
            alert("Valor inválido, tente novamente");
            console.log("Valor inválido, tente novamente");
        }
    }

    else{
        alert("Valor inválido, tente novamente");
        console.log("Valor inválido, tente novamente");
    }
}

else{
    alert("Valor inválido, tente novamente");
    console.log("Valor inválido, tente novamente");
}