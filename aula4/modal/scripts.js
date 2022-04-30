var modal = document.getElementById("modal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

function mostrarModal(){
  modal.style.display = "block";
}
btn.onclick = mostrarModal;

fecharModal = function(){
  modal.style.display = "none";
}
var apelido = fecharModal;
span.onclick = apelido;

window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}

