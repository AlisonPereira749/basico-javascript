//Map, Filter & Reduce
// Usado em listas

//----MAP---

// const numbers = [1, 2, 3, 4 , 5]
//Vamos fazer com que cada numero da lista seja multiplicado por 2

// const numbersMultipliedByTwo = numbers.map(function(item) {
//     return item * 2
// })

// console.log(numbersMultipliedByTwo)

//---FILTER---
//Vamos pegar somente os numeros pares 
const ages = [8, 22, 33, 35, 40, 28, 40]

// const evenAges = ages.filter(function (age) {
//     return age % 2 === 0;
// })

// console.log(evenAges)

//---REDUCE---
//Vamos redusir os valores de uma lista em uma só
const sumOfAges = ages.reduce(function (ages, accumulator) {
    return accumulator + ages;
}, 0)

console.log(sumOfAges)