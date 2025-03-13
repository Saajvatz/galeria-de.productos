import { productosapi } from "../servis/api.js";

async function mostrarproductos(){
    try{
        let datos = await productosapi();
        console.log(datos);
        todosLosProductos(datos);

    }catch(error){ console.error("Error:", error)}
}

function todosLosProductos(data){
    let DOM = document.querySelector("#root");

    data.forEach(element => {
        console.log(element);
        DOM.appendChild(crearProducto(element.image, element.title, element.price, element.description));
    });
}

function crearProducto(image, title, price, description) {
    let card = document.createElement("div");
    card.classList.add("producto-card");

    let img = document.createElement("img");
    img.src = image;
    img.alt = title;

    let nombre = document.createElement("h3");
    nombre.textContent = title;

    let precio = document.createElement("p");
    precio.textContent = `$${price}`;
    precio.classList.add("producto-precio");

    let descripcion = document.createElement("p");
    descripcion.textContent = description;
    descripcion.classList.add("producto-descripcion");

    card.appendChild(img);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(descripcion);

    return card;
}



export {mostrarproductos}
