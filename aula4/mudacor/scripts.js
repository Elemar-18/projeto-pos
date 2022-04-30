function mudaCor(){
  const elements = document.getElementsByClassName("colored-div");
  const div = elements[0];
  const input = document.getElementsByTagName("input")[0];
  const cor = input.value;
  div.style.backgroundColor = cor;
}

idInterval = null;
function aumentaDiv(){
  clearInterval(idInterval);
  setInterval(cresceDiv, 100);
}

function diminuDiv(){
  clearInterval(idInterval);
  setInterval(diminuDiv, 100);
}

function cresceDiv(){
  setInterval();
  const elements = document.getElementsByClassName("colored-div");
  const div = elements[0];
  let altura = div.offsetHeight + 10;
  let largura = div.offsetWidth + 10;
  div.style.height = altura + "px";
  div.style.width = largura + "px";
}

function diminuiDiv(){
  const elements = document.getElementsByClassName("colored-div");
  const div = elements[0];
  let altura = div.offsetHeight / 2;
  let largura = div.offsetWidth / 2;
  div.style.altura = altura + "px";
  div.style.largura = largura + "px";
}