//pede as informacoes ao ususario
var kgFile = parseFloat(prompt("Diga quantos quilos de Filé duplo irá querer, lembrando que só pode escolher 2 carnes: "));
var cartao;
var kgAlcatra;
var kgPicanha;
var totalFile;
var totalAlcatra;
var totalPicanha;
var total;

//comeca uma seria de decisoes para informar o total a ser pego e as 2 carnes que o usuario escolheu
if(Number(kgFile)){
    
    kgAlcatra = parseFloat(prompt("Diga quantos quilos de Alcatra irá querer: "));

    if(Number(kgAlcatra)){

        if(kgFile <= 5){

            totalFile = kgFile * 4.90;

            if(kgAlcatra <= 5){

                totalAlcatra = kgAlcatra * 5.90;
                total = totalFile + totalAlcatra;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }

            else if(kgAlcatra > 5){

                totalAlcatra = kgAlcatra * 6.80;
                total = totalFile + totalAlcatra;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }
        }

        else if(kgFile > 5){

            totalFile = kgFile * 5.80;

            if(kgAlcatra <= 5){

                totalAlcatra = kgAlcatra * 5.90;
                total = totalFile + totalAlcatra;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
                
                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }

            else if(kgAlcatra > 5){

                totalAlcatra = kgAlcatra * 6.80;
                total = totalFile + totalAlcatra;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgAlcatra + " KG de Alcatra\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }
        }
    }

    else if(!Number(kgAlcatra)){

        kgPicanha = parseFloat(prompt("Diga quantos quilos de Picanha irá querer: "));

        if(!Number(kgPicanha)){

            alert("O valor solicitado não é válido ou não escolheu 2 carnes.");
            console.log("O valor solicitado não é válido ou não escolheu 2 carnes.");
        }
        
        else if(kgFile <= 5){

            totalFile = kgFile * 4.90;

            if(kgPicanha <= 5){

                totalPicanha = kgPicanha * 6.90;
                total = totalFile + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }

            else if(kgPicanha > 5){

                totalPicanha = kgPicanha * 7.80;
                total = totalFile + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }
        }

        else if(kgFile > 5){

            totalFile = kgFile * 5.80;

            if(kgPicanha <= 5){

                totalPicanha = kgPicanha * 6.90;
                total = totalFile + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }

            else if(kgPicanha > 5){

                totalPicanha = kgPicanha * 7.80;
                total = totalFile + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgFile + " KG de Filé\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }
        }
    }

    else{
        alert("O valor solicitado não é válido ou não escolheu 2 carnes.");
        console.log("O valor solicitado não é válido ou não escolheu 2 carnes.");
    }
}

else if(!Number(kgFile)){

    kgAlcatra = parseFloat(prompt("Diga quantos quilos de Alcatra irá querer: "));

    if(Number(kgAlcatra)){

        kgPicanha = parseFloat(prompt("Diga quantos quilos de Picanha irá querer: "));

        if(!Number(kgPicanha)){

            alert("O valor solicitado não é válido ou não escolheu 2 carnes.");
        console.log("O valor solicitado não é válido ou não escolheu 2 carnes.");
        }
        
        else if(kgAlcatra <= 5){

            totalAlcatra = kgAlcatra * 5.90;

            if(kgPicanha <= 5){

                totalPicanha = kgPicanha * 6.90;
                total = totalAlcatra + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }

            else if(kgPicanha > 5){

                totalPicanha = kgPicanha * 7.80;
                total = totalAlcatra + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }
        }

        else if(kgAlcatra > 5){

            totalAlcatra = kgAlcatra * 6.80;

            if(kgPicanha <= 5){

                totalPicanha = kgPicanha * 6.90;
                total = totalAlcatra + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }

            else if(kgPicanha > 5){

                totalPicanha = kgPicanha * 7.80;
                total = totalAlcatra + totalPicanha;

                cartao = prompt("Deseja pagar com o cartão Trabajara?(S/N)");

                if(cartao == "s" || cartao == "S"){

                    total = total - (total * 0.05);

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando no cartão Trabajara, ficará R$ " + total);
                }
                else if(cartao == "n" || cartao == "N"){

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }

                else{

                    alert("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                    console.log("------RECIBO------\n" + kgAlcatra + " KG de Alcatra\n" + kgPicanha + " KG de Picanha\n" + "Pagando sem o cartão Trabajara, ficará R$ " + total);
                }
            }
        }
    }

    else{
        alert("O valor solicitado não é válido ou não escolheu 2 carnes.");
        console.log("O valor solicitado não é válido ou não escolheu 2 carnes.");
    }
}