const form = document.getElementById('form')
const nome = document.getElementById('name')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const msg = document.getElementById('msg')

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const msgValue = msg.value.trim()

    if(nomeValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(nome, 'Preencha esse campo')
        return false
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(nome)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
        return false
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
        return false
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
   
    if(telefoneValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(telefone, 'Preencha esse campo')
        return false
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(telefone)
    }

    if(msgValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(msg, 'Preencha esse campo')
        return false
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(msg)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}


var behavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
options = {
    onKeyPress: function (val, e, field, options) {
        field.mask(behavior.apply({}, arguments), options);
    }
};

$('.phone').mask(behavior, options);