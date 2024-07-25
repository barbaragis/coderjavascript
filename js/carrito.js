//Carrito de compras con productos seleccionados por el usuario


function renderizarCarrito() {
    const carrito = cargarCarrito();
    let contenidoHTML ;
    
    if (totalProductos() > 0 ){
        contenidoHTML = 
        `<table class = " table table-sm table align-middle table-hover ">
        <td > <button  class="btn btn-secondary " onclick="vaciarCarrito()" ><i class="bi bi-trash"></i></button> </td>
        <tbody> `
  

    for (const producto of carrito) {
        contenidoHTML += ` <tr >
        <td>  <img src="${producto.imagen}"  class="img-thumbnail" width="155px" alt="${producto.nombre}"> </td>
        <td>  ${producto.nombre}</td>
        <td><p> $${producto.precio} </p> </td>
        <td> <button onclick="eliminarProducto(${producto.id})"><i class="bi bi-trash"></i></button></td>
            </div>
        </div>
        </tr>
        `
    }

    contenidoHTML += ` </tbody>
    </table>`
}else{
    contenidoHTML = ` <p class="text-center" >  Tu carrito está vacío <i class="bi bi-emoji-frown"></i> </p>`
}

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderizarCarrito();
renderBoton();
