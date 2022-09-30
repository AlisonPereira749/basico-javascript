// Funções & Arrow Functions
//Fazer uma soma
// 1 forma
function sum(a, b) {
    console.log(a + b)
}

sum(2, 5)

//também pode retornar um valor
function retornar(a, b) {
    return a + b;
}
const retornarValor = retornar(2 , 6)
console.log(retornarValor)


//3 forma - quando não recebe um dos valores
function soma(x, y = 10) {
    return x + y;
}
const somaValor = soma(5)
console.log(somaValor)



//Arrow Functions
const somaArrow = (c, d = 15) => {
    return c + d;
}

const valorSum = somaArrow(10)
console.log(valorSum) 

//Outra forma de retornar o valor
const adArrow = (c, d = 3) => c + d;

const valorArrow = adArrow(3)

console.log(valorArrow) 
