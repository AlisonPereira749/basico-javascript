// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

const cars = ["Ferrari", "Tesla", "BMW", "BYD"]

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

//Froma mais simples
// for (let car of cars) {
//     console.log(car)
// }

//Outra forma, más com opção de index
cars.forEach(function(car, index) {
    console.log(index)
    console.log(car);
})

//While Outra forma de Loops
let index = 0;

while (index < 10) {
    console.log("Index é menor que 10!");
    //index = index + 1;
    // index =+ 1;

    //Mesma coisa que acima
    index++;
}