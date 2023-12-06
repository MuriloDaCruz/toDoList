let adicionarNaLista = document.getElementById("adicionar");
let containerTarefas = document.getElementById("tarefas");
let campoInput = document.getElementById("informacao")
let botaoLimpar = document.getElementById("limpar");
let botaoLimpar2 = document.getElementById("limpar2")
let tarefaCompleta = document.getElementById("containerCompletas")

adicionarNaLista.addEventListener("click", function () {
  if (campoInput.value.trim() !== "") {
    let paragrafo = document.createElement("li");
    let addBotao = document.createElement("button")
    paragrafo.classList.add('estiloParagrafo');
    addBotao.classList.add('estiloFinalizar');
    


    
    paragrafo.innerText = campoInput.value;
    containerTarefas.appendChild(paragrafo);
    containerTarefas.createElement("button")
    campoInput.focus();

    campoInput.value = ""
    paragrafo.addEventListener("click", function () {
      containerTarefas.removeChild(paragrafo);
      tarefaCompleta.appendChild(paragrafo);
    })
    botaoLimpar.addEventListener("click", function () {
      containerTarefas.removeChild(paragrafo);
      tarefaCompleta.appendChild(paragrafo);
      campoInput.focus();
    })
    botaoLimpar2.addEventListener("click", function () {
      tarefaCompleta.removeChild(paragrafo);
    })
  }
})