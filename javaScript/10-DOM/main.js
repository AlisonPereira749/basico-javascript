//Selecionando apenas um elementos do HTML

// const addUserText = document.getElementById('add-user')
// //Aterar o codigo com JS
// addUserText.innerText = "Alterei o titúlo da página"

// const addUserText = document.querySelector(".titulo");
// addUserText.textContent = "Alterei o título usando CLAS"


//SELECIONAR MAIS DE UM ELEMENTO
// const allItems = document.querySelectorAll('.item')
// console.log(allItems)

// const allItems = document.getElementsByClassName("item")
// console.log(allItems)

// -- MANIPULANDO ITENS DO HTML

        // remover
const items = document.querySelector(".items")
const button = document.querySelector('.btn')
// items.remove()  - removeu todos os itens

        //Remove o primeiro item
//items.firstElementChild.remove() 

        //Altera um item de acordo com o index
items.children[2].textContent = "Alterei o texto do index 2"

        //Mudando a cor do botão
button.style.background = "blue";
button.style.color = "red"

