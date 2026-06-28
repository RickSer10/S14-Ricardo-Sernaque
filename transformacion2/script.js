const platos = [
    {
        emoji: "🍔"
        , nombre: "Hamburguesa", desc: "Carne a la parrilla, queso y salsa de la casa.", precio: 18
    },
    {
        emoji: "🍕"
        , nombre: "Pizza Personal", desc: "Masa artesanal, mozzarella y albahaca fresca.", precio: 22
    },
    {
        emoji: "🌭"
        , nombre: "Hot Dog"
        , desc: "Salchicha premium con papas al hilo crocantes.", precio: 12
    },
    {
        emoji: "🌮"
        , nombre: "Tacos al Pastor", desc: "Tortilla suave, piña y cilantro.", precio: 16
    },
    {
        emoji: "🍟"
        , nombre: "Papas Cargadas", desc: "Con queso fundido, tocino y cebollín.", precio: 14
    },
    {
        emoji: "🥤"
        , nombre: "Limonada Frozen", desc: "Refrescante, hecha al momento.", precio: 8
    },
];

const grid = document.getElementById("grid");
platos.forEach((plato) => {
    const card = document.createElement("article");
    card.className =
        "card";
    card.innerHTML = `
        <div class="emoji">${plato.emoji}</div>
                <h3>${plato.nombre}</h3>
                <p class="desc">${plato.desc}</p>
            <div class="row">
                <span class="price">S/.${plato.precio}<br><small>el plato</small></span>
                <button class="btn-add">Agregar</button>
        </div>
`;
    // RF02: evento click en el botón táctil
    card.querySelector(".btn-add").addEventListener("click", (e) => agregar(e.target));
    grid.appendChild(card);
});

let contador = 0;
const elContador = document.getElementById("contador");
function agregar(boton) {
    contador++; // <-- lógica del ejercicio: contador++
    elContador.textContent = contador;
    // Animación de rebote en el número
    elContador.classList.remove("bump");
    void elContador.offsetWidth; // truco para reiniciar la animación
    elContador.classList.add("bump");
    // Feedback visual en el botón: "Agregado ✓" por un instante
    const textoOriginal = boton.textContent;
    boton.textContent = "Agregado ✓";
    boton.classList.add("added");
    setTimeout(() => {
        boton.textContent = textoOriginal;
        boton.classList.remove("added");
    }, 800);
}

const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("open");
    btnMenu.setAttribute("aria-expanded"
        , abierto);
    btnMenu.textContent = abierto ? "✕" : "☰";
});