const nombre =  prompt("¿Cual es su nombre?")
let saludo = document.createElement("h3")
saludo.innerHTML = `Bienvenid@ ${nombre}`
document.body.appendChild(saludo)

const productos = [
    {id:1, producto:"Polo", precio:1500000},
    {id:2, producto:"Gol", precio:1000000},
    {id:3, producto:"Vento", precio:2800000},
    {id:4, producto:"Amarok", precio:3550000},
    {id:5, producto:"Fox", precio:1250000},
    {id:6, producto:"Saveiro", precio:1277000},
];

let titulo = document.createElement("p")
titulo.innerHTML = "Nuestros productos son:";
document.body.appendChild(titulo);


function crearBoton(id) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'Comprar';
    return btn;
}

function crearItem(item) {
    const li = document.createElement("li");
    li.innerHTML = `Producto: ${item.producto} / Precio: $${item.precio}`;
    li.appendChild(crearBoton());
    return li;
}

function crearLista(items) {
    const contenedor = document.createElement("ul");

    for (let item of items) {
        contenedor.appendChild(crearItem(item));
    }

    return contenedor;
}

function app() {
    document.body.appendChild(crearLista(productos));
}

app();
