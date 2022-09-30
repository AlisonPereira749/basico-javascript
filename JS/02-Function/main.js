//Funcões

let marca = "Lenovo";

function corModelo(cor, modelo){
    marca = cor + ' ' + modelo;
};

console.log(marca);
corModelo("Cinza", "ideapad");
console.log(marca);


        // conparações
//tem um cliente, 100 premium, menor que 100 é comum

let pontos = 100;

let tipo = pontos > 990 ? 'Premim' : 'Comum';

console.log(tipo)


// Retornar o maior valor 

let valores = max(21, 20);

function max(numeroUm, numeroDois) {
    return numeroUm > numeroDois ? numeroUm: numeroDois;
}

console.log(valores);