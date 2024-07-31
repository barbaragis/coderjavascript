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
    },
    {
        id:5,
        nombre: "Vela cactus",
        descripcion: "Vela de soja en maceta de cemento. " ,
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/img-41101-c69021a0e908b7e29f16932280256755-1024-1024.webp", 
        categoria: {
            nombre : "velas",
            id : "velas"},
        precio: 2500
    },
    {
        id:6,
        nombre: "Espejo de mesa",
        descripcion: "Espejo de mesa con base de cemento ",
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/whatsapp-image-2024-03-08-at-17-36-45-2e8cb4077e987f9e5717099303161164-1024-1024.webp",
        categoria: {
            nombre : "Deco",
            id : "deco"},
        precio: 2500
    },
    {
        id:7,
        nombre: "Portavelas classic",
        descripcion: "Portavelas de cemento  ",
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/image000061-09675179554ea92fc116891730156274-1024-1024.webp",
        categoria: {
            nombre : "Portavelas",
            id :"portavelas"},
        precio: 2500
    },
    {
        id:8,
        nombre: "Vela heart",
        descripcion: "Vela de soja con forma de corazón  ",
        imagen : "https://acdn.mitiendanube.com/stores/002/382/814/products/image0002411-a40bd9aeaaef6695d916891713023871-640-0.webp",
        categoria: {
            nombre : "velas",
            id :"velas"},
        precio: 2500
    },
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

    Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1000
      });
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