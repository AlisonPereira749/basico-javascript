const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const erroMenssage = document.querySelector('.msg');
const items = document.querySelector('.items');

submitButton.addEventListener("click" , (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        erroMenssage.textContent = "Please fill out fields!";
        erroMenssage.classList = "error";

        setTimeout(() => {
            erroMenssage.textContent = ""
            erroMenssage.classList = ""
        }, 3000);

        return;
    }

    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`;

    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
})