//Carrito de compras con productos seleccionados por el usuario


function renderizarCarrito() {
    const carrito = cargarCarrito();
    let contenidoHTML ;
    
    if (carrito.length > 0 ){
        contenidoHTML = 
        `<table class = " table table-sm table align-middle table-hover ">
        <td  > <button  class="btn btn-secondary p-2  " onclick="vaciarCarrito()" > Vaciar carrito</button> </td>
        <tbody> 
        <table class="table table-sm table align-middle table-hover">
        <thead>
            <tr>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                
            </tr>
        </thead>
        <tbody> 
`

    for (const producto of carrito) {
        contenidoHTML += ` <tr >
        <td>  <img src="${producto.imagen}"  class="img-thumbnail" width="155px" alt="${producto.nombre}"> </td>
        <td>  ${producto.nombre}</td>
        <td>  $${producto.precio}  </td>
        <td> ${producto.cantidad} </td>
        <th> $${producto.precio * producto.cantidad }</th>
        <td> 
            <button onclick="eliminarProducto(${producto.id})"><i class="bi bi-trash"></i></button> 
        </td>

        </tr>
        `
    }

    contenidoHTML += ` </tbody>
    </table>`
    
    const totalCompra = calcularTotal();
    document.getElementById("totalCompra").innerText = `Total a pagar: $${totalCompra}`;
    document.getElementById("totalCompra").style.display = "block"

}else{
    contenidoHTML = ` <p class="text-center" >  Tu carrito está vacío <i class="bi bi-emoji-frown"></i> </p>`

    document.getElementById("totalCompra").style.display = "none"
}

    document.getElementById("contenido").innerHTML = contenidoHTML;

  

}


renderizarCarrito();
renderBoton();
