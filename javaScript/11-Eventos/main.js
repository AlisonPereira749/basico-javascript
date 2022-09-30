const submitButton = document.querySelector('#submit-button')
const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")

const items = document.querySelector('.items')

//Evento do botão - click
submitButton.addEventListener("click" , function (evento) {
    evento.preventDefault();
    // console.log("clicked!")

        //Guarda o valor do INPUT
    const nameValue = nameInput.value;
    const emailValue  = emailInput.value;
    
    //Dê um alerta se todos os campos não forem preencgidos
    if (nameValue === '' || emailValue === '') {
        return alert("Preencha todos os campos");
    }

    //Mudar a cor de fundo se a ação for valida
    myForm.style.background = "cyan";
    //Vamos colocar os calores do formulario nos itens
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;
});

        //Escutar uma mudança no INPUT através de um click 
// nameInput.addEventListener("chage", function (evento) {
//     console.log(evento.target.value);
// })