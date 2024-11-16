//pede os dados ao usuario para comecar os calculos
var kgMaca = parseFloat(prompt("Quantos quilogramas de Maçã irá querer? "));
var kgMorango = parseFloat(prompt("Quantos quilogramas de Morango irá querer? "));
var totalMaca;
var totalMorango;
var totalCompra;
var totalKg;
var desconto;

//comeca as verificacoes para mostrar os calculos para o usuario
if(!Number(kgMaca) || !Number(kgMorango)){
    alert("Este é um valor inválido, tente novamente.");
    console.log("Este é um valor inválido, tente novamente.");
}

else if(kgMaca != 0){
    
    if(kgMorango != 0){

        if(kgMaca <= 5){
            totalMaca = kgMaca * 1.80;

            if(kgMorango <= 5){
                totalMorango = kgMorango * 2.50;
                totalKg = kgMaca + kgMorango;
                totalCompra = totalMaca + totalMorango;

                if(totalKg > 8 || totalCompra > 25){
                    desconto = totalCompra - (totalCompra * 0.10);

                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }

                else{
                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }
            }

            else if(kgMorango > 5){
                totalMorango = kgMorango * 2.20;
                totalKg = kgMaca + kgMorango;
                totalCompra = totalMaca + totalMorango;

                if(totalKg > 8 || totalCompra > 25){
                    desconto = totalCompra - (totalCompra * 0.10);

                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }

                else{
                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }
            }
        }

        else if(kgMaca > 5){
            totalMaca = kgMaca * 1.80;

            if(kgMorango <= 5){
                totalMorango = kgMorango * 2.50;
                totalKg = kgMaca + kgMorango;
                totalCompra = totalMaca + totalMorango;

                if(totalKg > 8 || totalCompra > 25){
                    desconto = totalCompra - (totalCompra * 0.10);

                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }

                else{
                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }
            }

            else if(kgMorango > 5){
                totalMorango = kgMorango * 2.20;
                totalKg = kgMaca + kgMorango;
                totalCompra = totalMaca + totalMorango;

                if(totalKg > 8 || totalCompra > 25){
                    desconto = totalCompra - (totalCompra * 0.10);

                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }

                else{
                    alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                    console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                }
            }
        }
    }

    else if(kgMorango == 0){

        if(kgMaca <= 5){
            totalMaca = kgMaca * 1.80;
            totalKg = kgMaca;
            totalCompra = totalMaca;

            if(totalKg > 8 || totalCompra > 25){
                desconto = totalCompra - (totalCompra * 0.10);

                alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            }

            else{
                alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            }
        }

        else if(kgMaca > 5){
            totalMaca = kgMaca * 1.50;
            totalKg = kgMaca;
            totalCompra = totalMaca;

            if(totalKg > 8 || totalCompra > 25){
                desconto = totalCompra - (totalCompra * 0.10);

                alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            }

            else{
                alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
                console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            }
        }
    }
}

else if(kgMaca == 0){
    if(kgMorango <= 5){
        totalMorango = kgMorango * 2.50;
        totalKg = kgMorango;
        totalCompra = totalMorango;

        if(totalKg > 8 || totalCompra > 25){
            desconto = totalCompra - (totalCompra * 0.10);

            alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
        }

        else{
            alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
        }
    }

    else if(kgMorango > 5){
        totalMorango = kgMorango * 1.50;
        totalKg = kgMorango;
        totalCompra = totalMorango;

        if(totalKg > 8 || totalCompra > 25){
            desconto = totalCompra - (totalCompra * 0.10);

            alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
        }

        else{
            alert("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
            console.log("Comprando: \n" + kgMaca + " kg de Maçã.\n" + kgMorango + " kg de Morango.\n" + "Terá que pagar no total: R$ " + totalCompra);
        }
    }
}