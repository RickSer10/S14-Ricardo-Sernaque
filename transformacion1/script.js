const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const themeBtn = document.getElementById("themeBtn");

const touchArea = document.getElementById("touchArea");
const resultado = document.getElementById("resultado");

const fab = document.getElementById("fab");


// Mostrar/Ocultar menú

menuBtn.addEventListener("click", () => {

  if(menu.style.display === "block"){
    menu.style.display = "none";
  }
  else{
    menu.style.display = "block";
  }

});

// Cambiar tema claro/oscuro
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});

// Evento táctil (Tap)
touchArea.addEventListener("click", () => {

  resultado.innerHTML = "Has realizado un TAP";

});

// Botón flotante
fab.addEventListener("click", () => {

  alert("Botón flotante presionado");

});