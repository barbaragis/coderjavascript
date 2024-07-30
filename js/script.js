// Cards de productos

const botonCategoria = document.querySelectorAll(".button-categoria");
const titulo = document.getElementById("titulo");

function renderizarProductos(productosEnPagina) {
    let contenidoHTML = "";

    for (const producto of productosEnPagina) {
        contenidoHTML += `
        <div class="card m-2 border border-0" style="width: 16rem;">
                <img src="${producto.imagen}" class="card-img-top " alt="${producto.nombre}">
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
    let imagenHTML = `<img src="${producto.imagen}" class="imagen__detalle"  alt="${producto.nombre}"/>`
    let detalleHTML = `<div>
        <h2> ${producto.nombre} </h2>
    <span class=" mb-2" > ${producto.descripcion} </span>
    <div class="p-2">
        <span class="precio__producto"> $ ${producto.precio} </span>
        <div class="d-flex justify-content-center text-center">
        <button class="container__botones button-detalle " onclick="agregarProducto(${producto.id})">AGREGAR AL CARRITO</button>
        </div>
    </div>`
    document.getElementById("detalle").innerHTML = imagenHTML + detalleHTML;
}}

document.getElementById("cerrarDetalle").addEventListener("click" , () => {
    document.getElementById("detalleProducto").style.display = "none"
})




/* // Segunda preentrega

const velas = [
    {id : 1 , nombre : "Vela de Lavanda" , precio : 15000},
    {id : 2 ,nombre : "Vela de Limon" , precio : 21000},
    {id : 3 , nombre : "Vela de Menta" , precio : 16000},
    {id : 4 , nombre : "Vela de Vainilla" , precio : 14300},  
]

class Productos {
    constructor (productos){
        this.items = productos;
    }

    agregarProducto (nombre, precio){
        const producto = {
            id: this.generarId(),
            nombre : nombre,
            precio: precio
        }
        this.items.push(producto);
    }

    buscarProducto(id){
        return this.items.find(item => item.id == id)
    }


    totalProductos(){
        return this.items.length;
    }

    
    generarId(){
        return this.totalProductos() + 1;
    }

    eliminarProducto (id){
        this.items= this.items.filter(item => item.id != id);
        this.nuevoId()
        alert(" Se eliminó el producto "+ id + " = Vela de menta")
    }

    nuevoId (){
        this.items.forEach((item, i) => {
            item.id = i + 1;
        })
    }

    mostrarLista (){
        let catalogo = "Catálogo de productos: \n" ;
        this.items.forEach(producto  => {
            catalogo +=` ID : ${producto.id}, - Nombre : ${producto.nombre} , Precio : ${producto.precio } \n`
        });
        alert(catalogo)
    }
}

const lista = new Productos (velas);
lista.mostrarLista()

//Ingreso un nuevo producto por prompt

let nombreProducto = prompt("Ingrese el modelo de vela");
let precioProducto = prompt("Ingrese el precio");

lista.agregarProducto(nombreProducto,precioProducto);

//Agrego otro producto y muestro nuevamente el catalogo (push)

lista.agregarProducto("Vela de Tilo", 20000);
lista.mostrarLista();

// Se elimina el producto 3 (Vela de Menta) (filter)
lista.eliminarProducto(3);
lista.mostrarLista()

// Busqueda del producto con ID 1 = Vela de lavanda (find)
let producto = lista.buscarProducto(1);
if (producto) {
    alert("Busqueda de producto con ID 1 : " + producto.nombre + " - $ " + producto.precio)
}else {
    alert("Producto no encontrado")
}

//Cantidad de productos (length)
alert ("Cantidad total de productos  : " + lista.totalProductos());






 */


















/* Primera preentrega

// Saludo

let cliente = prompt("Ingrese su nombre y apellido");
alert("Bienvenido/a " + cliente);

// Elección de producto con opciones y validación

let compra = parseInt(prompt("¿Qué desea comprar hoy? Ingrese el numero de su elección: \n 1- Velas \n 2-Aromatizadores"))
while (compra !== 1 && compra !== 2 ) {
    alert("No existe ese producto . Elija una opción válida");
    compra = parseInt(prompt("¿Qué desea comprar hoy? Ingrese el numero de su elección : 1- Velas 2-Aromatizadores"))
}

//IVA

function calcularIva(precio){
    const iva = 0.21;
    return precio * (1+iva);
}

//Forma de pago 

function formaDePago(precioConIva) {
    let pago = parseInt(prompt("¿Como desea abonar?: \n 1- Tarjeta de crédito \n 2 - Transferencia (15% de descuento) "));
    while (pago !== 1 && pago !==2){
        alert("Forma de pago inválida");
        pago = parseInt(prompt("¿Como desea abonar?: \n 1 - Tarjeta de crédito \n 2- Transferencia (15% de descuento" ));
    }
    if (pago===2){
        const descuento = 0.15;
        precioConIva = precioConIva * (1-descuento);
        alert("Elegiste la opción de pago con transferencia, obtienes un 15% de descuento . Debes abonar $" + precioConIva)
    }else{
        alert("Elegiste la opción de pago con tarjeta de crédito. El precio a abonar es " + precioConIva)
    }
}


// Funcion para elegir el producto y su fragancia

function eleccion (){
    let precio;
    if (compra === 1){
        let fraganciaVela = parseInt (prompt("¿Que fragancia desea comprar hoy? 1- Vainilla ($25000) \n 2- Gardenia ($18000)"));
        while (fraganciaVela !==1 && fraganciaVela !==2 ){
            alert("Opción inválida, por favor revisa los datos ingresados");
            fraganciaVela = parseInt (prompt("¿Que fragancia desea comprar hoy? 1- Vainilla ($25000) \n 2- Gardenia ($18000)"));
        }
        if (fraganciaVela === 1){
            precio= 25000;
        } else if (fraganciaVela ===2){
            precio= 18000;
        }
    } else if (compra === 2){
        let fraganciaAromatizador = parseInt(prompt("¿Que fragancia de aromatizador desea comprar? \n 1- Lavanda $17500 \n 2- Citrus $19200"));
        while (fraganciaAromatizador !== 1 && fraganciaAromatizador!==2 ){
            alert("Opcion invalida, por favor revisa los datos ingresados");
            fraganciaAromatizador = parseInt(prompt("¿Que fragancia de aromatizador desea comprar? \n 1- Lavanda $17500 \n 2- Citrus $19200"));
        }
        if (fraganciaAromatizador === 1){
            precio = 17500;
        } else if (fraganciaAromatizador ===2){
            precio= 19200;
    }
}

let precioConIva = calcularIva (precio);
formaDePago(precioConIva);

//Saludo final

alert ("Muchas gracias por tu compra");

}


eleccion();

*/