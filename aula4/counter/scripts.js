function incrementa(){
  const p = document.getElementById("contador");
  let valor = parseInt(p.innerHTML);
  valor += 1;
  p.innerHTML = valor;
  if(valor >= 0){
    p.classList.remove("negativo");
  }
}

function decrementa(){
  const p = document.getElementById("contador");
  let valor = parseInt(p.innerHTML);
  valor -= 1;
  p.innerHTML = valor;

  if(valor < 0){
    p.classList.add("negativo");
  }
}

function reseta(){
  const p = document.getElementById("contador");
  p.innerHTML = 0;
  if(valor <= 0){
    p.classList.remove("negativo");
  }
}