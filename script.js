const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
});

const modalSucesso = document.querySelector(".sucesso");
const modalErro = document.querySelector(".erro");

function fecharModal() {
    modalSucesso.style.display = "none";
    modalErro.style.display = "none";
}

const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");

campoEmail.addEventListener("change", validarEmail);
campoSenha.addEventListener("change", validarSenha);

const dicaEmail = document.querySelector(".email");
const dicaSenha = document.querySelector(".senha");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarEmail() {
    if (campoEmail.value == "") {
        campoEmail.style.borderColor = "#ff0000";
        dicaEmail.innerHTML = "Este campo não pode ficar vazio.";
    } else if (regexEmail.test(campoEmail.value)) {
        campoEmail.style.borderColor = "#008000";
        dicaEmail.innerHTML = "";
    } else {
        campoEmail.style.borderColor = "#ff0000";
        dicaEmail.innerHTML = "Formato de e-mail inválido";
    }
}

function validarSenha() {
    if (campoSenha.value == "") {
        campoSenha.style.borderColor = "#ff0000";
        dicaSenha.innerHTML = "Este campo não pode ficar vazio.";
    } else if (campoSenha.value.length >= 6) {
        campoSenha.style.borderColor = "#008000";
        dicaSenha.innerHTML = "";
    } else {
        campoSenha.style.borderColor = "#ff0000";
        dicaSenha.innerHTML = "Insira pelo menos 6 caracteres.";
    }
}

function entrar() {
    if (regexEmail.test(campoEmail.value) && campoSenha.value.length >= 6) {
        campoEmail.value = "";
        campoSenha.value = "";
        fecharModal();
        modalSucesso.style.display = "flex";
        modalSucesso.style.animation = "fadein 1s";
    } else {
        validarEmail();
        validarSenha();
        fecharModal();
        modalErro.style.display = "flex";
        modalErro.style.animation = "fadein 1s";
    }
}
