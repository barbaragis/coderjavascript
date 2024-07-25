//Detalle del producto seleccionado

function renderProducto () {
    const producto = cargarProductoLs();
    let imagenHTML = `<img src="${producto.imagen}" class="imagen__detalle"  alt="${producto.nombre}"/>`
    document.getElementById("imagenProducto").innerHTML = imagenHTML;
    let detalleHTML = `<div>
        <h2> ${producto.nombre} </h2>
    <span class="mb-2" > ${producto.descripcion} </span>
    <div class="p-2">
        <span> $ ${producto.precio} </span>
        <button class="btn btn-secondary" onclick="agregarProducto(${producto.id})">Agregar al carrito</button>
    </div>`
    document.getElementById("detalle").innerHTML = detalleHTML
}

renderProducto();
renderBoton();