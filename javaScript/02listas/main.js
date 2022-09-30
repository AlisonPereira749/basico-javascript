//Lista de itens - pode conter qualquer coisa (nome, numero...)
const names = ["Felipe", "João", "Pedro", 10, false];

//Vai listar no console o item de acordo com sua posição

// const joao = names[2]; 
//console.log(joao)

//Adicionar itens no fim da lista
//names.push("Maria");

//Adicionar itens no início da lista
names.unshift(20);

//Remover o último item da lista
names.pop();

//Modificar um item da lista
names[3] = "Gustavo"

//Ordenar uma lista alfabeticamente
const sortedNames = names.sort();

//Descobrir a index de um item da lista
console.log(names.indexOf("João"));

//Descobrir se uma variável é uma lista ou não
const namesIsArray = Array.isArray(names);

console.log(names);

console.log(sortedNames)

console.log(namesIsArray)