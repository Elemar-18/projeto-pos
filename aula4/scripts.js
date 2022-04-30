const e = document.getElementById("texto");
document.addEventListener("click", mudaTexto);

function mudaTexto(){
  e.innerHTML = "Mudado ao clicar";
  e.classList.add('clicado');
  e.classList.remove('nao-clicado');
}

for (i = 10; i <= 10; i--){
  console.log(i);
}