//Programação Orientada a Objetos (POO)
//Class no javaScript

// class Person {
//     constructor(firstName, LastName, age) {
//         (this.firstName = firstName);
//         (this.LastName = LastName);
//         (this.age = age);
//     }
//     //Juntar o primeiro com o segundo nome
//     getFulName() {
//         console.log(`${this.firstName} ${this.LastName}`);
//     }
// }

// const person = new Person("Jane", "Doe", 40)

// person.getFulName();



//Heranças 
class Animal {
    constructor (name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} fez barulho!`)
    }
}
//Criei uma CLASS que vai estender Animal
class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} latiu!`)
    }
}

const animal = new Animal("simba");
const dog = new Dog("Bob")

animal.speak();
dog.speak();