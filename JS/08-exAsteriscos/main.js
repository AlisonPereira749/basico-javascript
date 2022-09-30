//Criar uma função que exibe a quantidade de asteriscos que cada linha possui

asteriscos(10)

function asteriscos(linhas) {
    // let padrao = '';
    // for (let linha = 1; linha <= linhas; linha++) {
    //     padrao += '*';
    //     console.log(padrao)
    // }
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao)
    }
}


// Criar função que mostra os números primos
numerosPrimos(20);
function numerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;

        for (let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                ehPrimo = false;
                break
            }
        }
        if (ehPrimo) console.log(numero)
    }
}