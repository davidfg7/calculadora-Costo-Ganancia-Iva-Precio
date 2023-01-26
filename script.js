//! Solicitar al usuario que ingrese el costo del producto al que se le va a calcular el iva

while(true){
    var costo = parseFloat(prompt("Ingrese el costo del producto a vender"))

    if(costo != isNaN && costo != null && costo != ""){
        break;
    } else {
        alert("no es número, por favor ingrese un número")
        continue;
    }
}

costoM = costo.toFixed(2)
alert(`El costo del producto es ${costoM}`)
console.log(`El costo del producto es ${costoM}`);

//! Calcular el porcentaje de ganancia deseado

while(true){
    var porcentajeGanancia = parseFloat(prompt("Ingrese el porcentaje de ganancia por venta deseado"))

    if(porcentajeGanancia != isNaN && porcentajeGanancia != null && porcentajeGanancia != ""){
        break;
    } else{
        alert("Por favor ingrese un número")
        continue;
    }
}

var porcentajeGananciaM = (porcentajeGanancia / 100);

function calcularGanancia(costo){
    return (costo + (costo * porcentajeGananciaM))
}

var precioVentaSinIva = calcularGanancia(costo)
var precioVentaSinIvaM = precioVentaSinIva.toFixed(2)

alert(`El precio de venta sin IVA es = ${precioVentaSinIvaM}`);
console.log(`El precio de venta sin IVA es = ${precioVentaSinIvaM}`);

//! Calcular el iva 

function calcularIva(precioVentaSinIva, tasaIva){
    return (precioVentaSinIva * tasaIva)
}

const tasaIva = 0.21
var ivaTotal = calcularIva(precioVentaSinIva, tasaIva)

ivaTotalM = ivaTotal.toFixed(2)

alert(`El importe correspondiente a iva es = ${ivaTotalM}`)
console.log(`El importe correspondiente a iva es = ${ivaTotalM}`);


//! Calcular el precio sugerido de venta

function calcularPrecioVentaConIva(precioVentaSinIva, ivaTotal){
    return (precioVentaSinIva + ivaTotal)
}

var precioVentaConIva = calcularPrecioVentaConIva(precioVentaSinIva, ivaTotal);

precioVentaConIvaM = precioVentaConIva.toFixed(2)

alert(`El precio de venta total al público es = ${precioVentaConIvaM}`)
console.log(`El precio de venta total al público es = ${precioVentaConIvaM}`);