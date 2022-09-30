// Objetos
//Guarda valores dentro de propriedades
// const person = {
//     firsName: "Felipe",
//     city: "Brasilia",
//     age: "19",
//     hobbies: ["Assistir Futebol", "Jogar Video Game", "Ouvir música" ]
// }

// const firsName = person.firsName;
// const city = person.city;
// const age = person.age;
// const hobbies = person.hobbies;
//Forma mais simples a baixo
// const {firsName, city, age, hobbies} = person;

// const music = person.hobbies[2]

// console.log(firsName);
// console.log(city);
// console.log(age);
// console.log(hobbies);
// console.log(music)

//Adcionar propriedades
// person.dog = "Simba"

// console.log(person)

const todos = [
    {
        id: 1,
        description: 'Estudar',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true
    },
    {
        id: 3,
        description: 'Trabalhar',
        isCompleted: true
    },
]

const descriptionOfTodos = todos[2].description

console.log(descriptionOfTodos)