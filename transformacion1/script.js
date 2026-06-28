const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const themeBtn = document.getElementById("themeBtn");

const touchArea = document.getElementById("touchArea");
const resultado = document.getElementById("resultado");

const fab = document.getElementById("fab");

menuBtn.addEventListener("click", () => {

  if(menu.style.display === "block"){
    menu.style.display = "none";
  }
  else{
    menu.style.display = "block";
  }

});

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});

touchArea.addEventListener("click", () => {

  resultado.innerHTML = "Has realizado un TAP";

});

fab.addEventListener("click", () => {

  alert("Botón flotante presionado");

});