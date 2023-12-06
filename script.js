let adicionarNaLista = document.getElementById("adicionar");
let containerTarefas = document.getElementById("tarefas");
let campoInput = document.getElementById("informacao")
let botaoLimpar = document.getElementById("limpar");
let botaoLimpar2 = document.getElementById("limpar2");
let botaoLimpar3 = document.getElementById("limpar3")
let tarefaCompleta = document.getElementById("containerCompletas")

function adicionarTarefa() {
  if (campoInput.value.trim() !== "") {
    let lista = document.createElement("li");
    let addBotao = document.createElement("button");
    lista.classList.add('estiloLista');
    addBotao.classList.add('estiloFinalizar');
    addBotao.textContent = "Finalizar"
    campoInput.focus();
    lista.innerText = campoInput.value;
    containerTarefas.appendChild(lista);
    lista.appendChild(addBotao)
    campoInput.value = ""
    lista.addEventListener("click", function () {
      containerTarefas.removeChild(lista);
      tarefaCompleta.appendChild(lista);
      lista.removeChild(lista.childNodes[1]) 
      campoInput.focus();
    });
    botaoLimpar.addEventListener("click", function () {
      tarefaCompleta.appendChild(lista);
      containerTarefas.removeChild(lista);
      lista.removeChild(lista.childNodes[1]);
      campoInput.focus();
    });
    botaoLimpar2.addEventListener("click", function() {
    tarefaCompleta.removeChild(lista);
    campoInput.focus();
    });
    botaoLimpar3.addEventListener("click", function () {
      tarefaCompleta.removeChild(lista);
      containerTarefas.removeChild(lista);
      lista.removeChild(lista.childNodes[1]);
      campoInput.focus();
    });
  }
}

adicionarNaLista.addEventListener("click", adicionarTarefa);
document.addEventListener("keypress", function (event) { 
    if (event.keyCode === 13) {
        adicionarTarefa();
    }
});