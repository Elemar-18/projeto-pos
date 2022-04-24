let estado = false
let menu = document.querySelector('#menu')

function mostrarMenu(){
  if (estado == true){
    menu.style.display = 'none'
    estado = false
  } else {
    menu.style.display = 'block'
    estado = true
  }
}