const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");

campoEmail.addEventListener("keyup", validarEmail);
campoSenha.addEventListener("keyup", validarSenha);

const dicaEmail = document.querySelector(".email");
const dicaSenha = document.querySelector(".senha");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarEmail() {
    if (campoEmail.value == "") {
        dicaEmail.innerHTML = "Este campo não pode ficar vazio.";
    } else if (regexEmail.test(campoEmail.value)) {
        dicaEmail.innerHTML = "";
    } else {
        dicaEmail.innerHTML = "Formato de e-mail inválido";
    }
}

function validarSenha() {
    if (campoSenha.value == "") {
        dicaSenha.innerHTML = "Este campo não pode ficar vazio.";
    } else if (campoSenha.value.length >= 6) {
        dicaSenha.innerHTML = "";
    } else {
        dicaSenha.innerHTML = "Insira pelo menos 6 caracteres.";
    }
}

function entrar() {

}
