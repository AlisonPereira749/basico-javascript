// CRIAR FUNÇÃO QUE SOMA TODOS OS MÚLTIPLOS DE 3 E 5

// MÚLTIPLOS DE 3 - 3, 6, 9
// MÚLTIPLOS DE 5 - 5, 10

limiteSoma(10);
function limiteSoma(maximo) {
    let multiplosDe3 = 0;
    let multiploDe5 = 0;
    for(i =0;i <= maximo; i++){
        if(i % 3 === 0)
        multiplosDe3 += i;
        if(i % 5 === 0)
        multiploDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe3);
}