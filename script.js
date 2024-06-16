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

