let errors = [];

function checkValidity(input) {

    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле' + " " + input.placeholder + " " + 'не заполнено');


    }
    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');


    }
    if (validity.rangeOverflow) {
        let max = getAttributeValue(input, 'max');
        errors.push('Максимальное значение не может быть больше, чем' + max);


    }
    if (validity.rangeUnderflow) {
        let min = getAttributeValue(input, 'min');
        errors.push('Минимальное значение не может быть больше, чем' + min);


    }
}

let user = {
    name: document.getElementById('fullname').value,
    login: document.getElementById('logname').value,
    email: document.getElementById('emailbox').value,
    password0: document.getElementById('pswd').value,
    password1: document.getElementById('pswd_repeat').value

}
console.log(user);

fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));


function check() {

    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }
    document.getElementById('errorsInfo').innerHTML = errors.join('.<br>');

    let user = {
        name: document.getElementById('fullname').value,
        login: document.getElementById('logname').value,
        email: document.getElementById('emailbox').value,
        password0: document.getElementById('pswd').value,
        password1: document.getElementById('pswd_repeat').value

    }
    console.log(user);

    fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));

}