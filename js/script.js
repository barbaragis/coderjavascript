// Cards de productos

const botonCategoria = document.querySelectorAll(".button-categoria");
const titulo = document.getElementById("titulo");

function renderizarProductos(productosEnPagina) {
    let contenidoHTML = "";

    for (const producto of productosEnPagina) {
        contenidoHTML += `
        <div class="card m-2 border border-0" style="width: 16rem;">
            <a href="#" onclick="verDetalleLs(${producto.id})">
                <img src="${producto.imagen}" class="card-img-top " alt="${producto.nombre}">
                </a>
            <div class="card-body">
                <h5 class="card-title text-center ">${producto.nombre}</h5>
                <p class="precio__producto"> $${producto.precio} </p>
                <div class="container__botones">
                    <a href="#" onclick="verDetalleLs(${producto.id})"><i class="bi bi-eye"></i> </a>
                    <button class="btn btn-dark p-2" onclick="agregarProducto(${producto.id})">Agregar al carrito </button>
                    
                </div>
            </div>
        </div>
        `
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

botonCategoria.forEach(boton => {
    boton.addEventListener("click" , (e) => {
        botonCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const categoriaId = e.currentTarget.id;

        if (categoriaId !== "todos"){
            const productosFilter = productos.filter(item => item.categoria.id === categoriaId)
            titulo.innerText = e.currentTarget.innerText;
            renderizarProductos(productosFilter);
        }else{
            titulo.innerText = "TODOS LOS PRODUCTOS";
            renderizarProductos(productos)
        }
    })
})

renderizarProductos(productos);
renderBoton();

function verDetalleLs(id){
    localStorage.setItem ("producto" , JSON.stringify(id));
    renderProducto();
    document.getElementById("detalleProducto").style.display= "flex";
}


function cargarProductoLs(){
    let id = JSON.parse(localStorage.getItem ("producto"));
    return productos.find(item => item.id == id)
}


function renderProducto () {
    const producto = cargarProductoLs();
    if (producto){
    let imagenHTML = `<div class="image-container"><img src="${producto.imagen}" class="imagen__detalle"  alt="${producto.nombre}"/></div>`
    let detalleHTML = `<div class="text-center">
        <h2> ${producto.nombre} </h2>
        <span class=" mb-2 " > ${producto.descripcion} </span>
        <div class="p-2 text-center">
            <span class="precio__producto"> $ ${producto.precio} </span>
            <div class="d-flex justify-content-center text-center">
                <button class="container__botones button-detalle " onclick="agregarProducto(${producto.id})">AGREGAR AL CARRITO</button>
            </div>
        </div>`
    document.getElementById("detalle").innerHTML = imagenHTML + detalleHTML;
}}

document.getElementById("cerrarDetalle").addEventListener("click" , () => {
    document.getElementById("detalleProducto").style.display = "none";
})




