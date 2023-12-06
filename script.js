let adicionarNaLista = document.getElementById("adicionar");
let containerTarefas = document.getElementById("tarefas");
let campoinput = document.getElementById("informacao")
let botaoLimpar = document.getElementById("limpar");
let botaoLimpar2 = document.getElementById("limpar2")
let tarefaCompleta = document.getElementById("containerCompletas")

adicionarNaLista.addEventListener("click", function () {
  if (campoinput.value.trim() !== "") {
    let paragrafo = document.createElement("li");
    paragrafo.classList.add('paragrafoestilo');
    paragrafo.innerText = campoinput.value;
    containerTarefas.appendChild(paragrafo);
    campoinput.value = ""
    paragrafo.addEventListener("click", function () {
      containerTarefas.removeChild(paragrafo);
      tarefaCompleta.appendChild(paragrafo);
    })
    botaoLimpar.addEventListener("click", function () {
      containerTarefas.removeChild(paragrafo);
      tarefaCompleta.appendChild(paragrafo);
    })
    botaoLimpar2.addEventListener("click", function () {
      tarefacompleta.removeChild(paragrafo);
    })
  }
})