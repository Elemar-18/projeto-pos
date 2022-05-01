var minuto = 0;
var segundo = 0;

var cronometro;
var tempo = 1000;

function iniciar(){
  cronometro = setInterval(() => { chamarEvento(); }, tempo);
  document.getElementById("btn-iniciar").style.display = "none";
  document.getElementById("btn-pausar").style.display = "block";
  document.getElementById("btn-parar").style.display = "block";
}

function pausar(){
  clearInterval(cronometro);
  document.getElementById("btn-iniciar").style.display = "none";
  document.getElementById("btn-pausar").style.display = "block";
  document.getElementById("btn-pausar").innerHTML = "Continuar";
  document.getElementById("btn-parar").style.display = "block";
}

function parar(){
  clearInterval(cronometro);
  minuto = 0;
  segundo = 0;
  document.getElementById("timer").innerText = "00:00";
}

function chamarEvento(){
  segundo++;

  if(segundo == 60){
    minuto++;
    segundo = 0;
  }

  var formatarHora = (minuto < 10 ? '0' + minuto : minuto) + ':' +
                     (segundo < 10 ? '0' + segundo : segundo); 
  document.getElementById("timer").innerText = formatarHora;
}