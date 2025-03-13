document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        {
            img: "https://via.placeholder.com/150",
            nombre: "Producto 1",
            precio: "$10",
            descripcion: "Descripción del producto 1"
        },
        {
            img: "https://via.placeholder.com/150",
            nombre: "Producto 2",
            precio: "$20",
            descripcion: "Descripción del producto 2"
        },
        {
            img: "https://via.placeholder.com/150",
            nombre: "Producto 3",
            precio: "$30",
            descripcion: "Descripción del producto 3"
        }
    ];

    const contenedor = document.createElement("div");
    contenedor.classList.add("productos-container");
    document.body.appendChild(contenedor);

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("producto-card");
        
        const img = document.createElement("img");
        img.src = producto.img;
        img.alt = producto.nombre;

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = producto.precio;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        card.appendChild(img);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(descripcion);
        contenedor.appendChild(card);
    });

    // Estilos básicos
    const estilo = document.createElement("style");
    estilo.textContent = `
        .productos-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        .producto-card {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            width: 200px;
        }
        .producto-card img {
            max-width: 100%;
            border-radius: 5px;
        }
    `;
    document.head.appendChild(estilo);
});
