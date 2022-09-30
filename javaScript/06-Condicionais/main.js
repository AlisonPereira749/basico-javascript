//Vamos executar o codigo se a variavel for igual a 2
// const sum = 1 + 2;

// if (sum === 2) {
//     console.log("Sum is 2!");
// } else if (sum === 3) {
//     console.log("Sum is 3!")
// } else {
//     console.log("Sum is not 2!");
// }

//Operadores && e ||
// const sumOne = 2 + 2;
// const sumTwo = 3 + 3;

// if (sumOne === 4 && sumTwo === 6) {
//     console.log("SumOne is 4 and SamTwo is 6!")
// }

// if (sumOne === 4 || sumTwo === 6) {
//     console.log("SumOne is 4 and SamTwo is 6!")
// }


//Ternary Operator
const sum = 1 + 2;

let number = sum === 2 ? 2 : 4; //Mesma coisa que abaixo

// let number;
// if (sum === 2) {
//     number = 2;
// } else {
//     number = 4;
// }


console.log(number)

//SWITCH  - Executar o codigo em determinada situação
const car = "Tesla";

switch (car) {
    case "Mercedes":
        console.log("Mercedes is beautiful!")
        break;
    case "Ferrari":
        console.log("Ferrari is very red!")
        break
    case "Tesla":
        console.log("Tesla is very smart!")
        break
}