//Productos 

const productos = [
    {
        id:1,
        nombre: "Vela Pilar",
        descripcion: "Vela de soja desmoldada con dos pabilos de algodón bañados en cera de abeja. Perfume en vela por + de 60hs. Fragancia Maria Cher (cítricos, té verde, melón)",
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/image0002811-77f096cdd3dfb0b66816891710109453-1024-1024.webp",
        categoria: {
            nombre:"Velas",
            id: "velas"},
        precio: 2500
    },
    {
        id:2,
        nombre: "Vela Bubble",
        descripcion: "Vela de soja desmoldada con dos pabilos de algodón bañados en cera de abeja. Perfume en vela por + de 60hs.",
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/image0003111-318dde1fdfe8a2b1c316891712524092-1024-1024.webp",
        categoria: {
            nombre:"Velas",
            id: "velas"},
        precio: 2300
    },
    {
        id:3,
        nombre: "Portavelas Trendy",
        descripcion: "Portavelas de cemento. Tiene lugar para tres velas. ",
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/image000071-96a28eaaa35ee8b34016891731777849-1024-1024.webp",
        categoria: {
            nombre : "Portavelas",
            id : "portavelas"},
        precio: 2800
    },
    {
        id:4,
        nombre: "Florero nórdico",
        descripcion: "Florero de cemento. Pensado para utilizar con flores secas o solo como decoración. No apto agua. ",
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/image00031-215de38b2c6c16ccd317138100499440-1024-1024.webp",
        categoria: {
            nombre : "Deco",
            id : "deco"},
        precio: 2500
    }
]


//Funciones 

function agregarProducto (id){
    const producto = productos.find (item => item.id == id);
    const carrito = cargarCarrito();
    const index = carrito.findIndex(item => item.id == id)

    if (index !== -1){
        carrito[index].cantidad +=1;
    }else{
        producto.cantidad =1;
        carrito.push(producto)
    }

    localStorage.setItem("carrito" , JSON.stringify(carrito));
    renderBoton()
}

function eliminarProducto (id) {
    let carrito = cargarCarrito();
    const index = carrito.findIndex(item => item.id == id);

    if (index !== -1){
        if (carrito[index].cantidad > 1){
            carrito[index].cantidad -= 1;
        }else{
            carrito= carrito.filter(item => item.id != id);
        }
    }

    localStorage.setItem("carrito" , JSON.stringify(carrito))
    renderizarCarrito()
    renderBoton();
    
}


function renderBoton (){
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML  =` ${total}`
}

function totalProductos () {
    const carrito = cargarCarrito();
    return carrito.reduce((total, producto ) => total + producto.cantidad , 0)
}

function calcularTotal () {
    const carrito = cargarCarrito();
    let total = 0;

    for (const producto of carrito){
        total += producto.precio * producto.cantidad;

    }
    return total;
}

function cargarCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderizarCarrito();
    renderBoton()
    
}

function cargarProductoLs(){
    let id = JSON.parse(localStorage.getItem("producto"))
    const producto = productos.find(item => item.id == id)
    return producto;
}


function verDetalleLs(id){
    localStorage.setItem("producto" , JSON.stringify(id));
}

renderizarCarrito()
renderBoton()