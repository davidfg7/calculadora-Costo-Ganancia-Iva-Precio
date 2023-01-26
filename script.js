//! Solicitar al usuario que ingrese el precio de costo del producto al que se le va a calcular el iva

while(true){
    var precioCosto = parseFloat(prompt("Ingrese el precio de costo del producto"))

    if(precioCosto != isNaN && precioCosto != null && precioCosto != ""){
        alert("es número")
        break;
    } else{
        alert("no es número")
        continue;
    }
}

precioCostoM = precioCosto.toFixed(2)
alert(`El precio de costo del producto a calcular es ${precioCostoM}`)
console.log(`El precio de costo del producto a calcular es ${precioCostoM}`);

//! Sumar el iva al producto

let porcentajeIva = 0.21

function calcularIva(precioCosto, porcentajeIva) {
    return precioCosto * porcentajeIva
}

let iva = calcularIva(precioCosto, porcentajeIva)

ivaM = iva.toFixed(2)

alert(`El iva del producto ingresado es ${ivaM}`)
console.log(`El iva del producto ingresado es ${ivaM}`);

//! Sumarle el iva al precio del producto con iva

function sumarIva(precioCosto){
    return (precioCosto + (precioCosto * porcentajeIva))
}

let precioConIva = sumarIva(precioCosto)
let precioConIvaM = precioConIva.toFixed(2)

alert(`El precio del producto con IVA es = ${precioConIvaM}`)
console.log(`El precio del producto con IVA es = ${precioConIvaM}`);

//! Calcular el precio sugerido de venta

let porcentajeGanancia = 0.25

function sumarGanancia(precioConIva){
    return (precioConIva + (precioConIva * porcentajeGanancia))
}

let precioVenta = sumarGanancia(precioConIva)
let precioVentaM = precioVenta.toFixed(2)

alert(`El precio sugerido de venta es = ${precioVentaM}`)
console.log(`El precio sugerido de venta es = ${precioVentaM}`);