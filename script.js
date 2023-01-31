//! Solicitar al usuario que ingrese su nombre

let userName = prompt(`Bienvenido a Calculadora de costos, ganancia, iva y precio final!\nIngrese su nombre:`);
alert(`Hola ${userName}`);

//! Solicitar al usuario que ingrese el costo del producto al que se le va a calcular % de ganancia e iva

let exit;

while (exit != "n") {
  let costo = parseFloat(prompt("Ingrese el costo del producto a vender"));

  if (!isNaN(costo) && costo != null && costo != "") {
    costoM = costo.toFixed(2);
    alert(`El costo del producto es ${costoM}`);
    console.log(`El costo del producto es ${costoM}`);

    //! Calcular el porcentaje de ganancia deseado

    while (true) {
      porcentajeGanancia = parseFloat(
        prompt("Ingrese el porcentaje de ganancia por venta deseado")
      );

      if (
        !isNaN(porcentajeGanancia) &&
        porcentajeGanancia != null &&
        porcentajeGanancia != ""
      ) {
        break;
      } else {
        alert("Por favor ingrese un número");
        continue;
      }
    }

    let porcentajeGananciaM = porcentajeGanancia / 100;

    function calcularGanancia(costo) {
      return costo + costo * porcentajeGananciaM;
    }

    let precioVentaSinIva = calcularGanancia(costo);
    let precioVentaSinIvaM = precioVentaSinIva.toFixed(2);

    alert(`El precio de venta sin IVA es = ${precioVentaSinIvaM}`);
    console.log(`El precio de venta sin IVA es = ${precioVentaSinIvaM}`);

    //! Cálculo de iva

    function calcularIva(precioVentaSinIva, tasaIva) {
      return precioVentaSinIva * tasaIva;
    }

    const tasaIva = 0.21;
    let ivaTotal = calcularIva(precioVentaSinIva, tasaIva);

    ivaTotalM = ivaTotal.toFixed(2);

    alert(`El importe correspondiente a iva es = ${ivaTotalM}`);
    console.log(`El importe correspondiente a iva es = ${ivaTotalM}`);

    //! Calcular el precio sugerido de venta al público

    function calcularPrecioVentaConIva(precioVentaSinIva, ivaTotal) {
      return precioVentaSinIva + ivaTotal;
    }

    let precioVentaConIva = calcularPrecioVentaConIva(precioVentaSinIva,ivaTotal);

    precioVentaConIvaM = precioVentaConIva.toFixed(2);

    alert(`El precio sugerido de venta al público con iva es = ${precioVentaConIvaM}`);
    console.log(`El precio sugerido de venta al público con iva es = ${precioVentaConIvaM}`
    );

    alert(`Costo del producto= ${costoM}\nPorcentaje de ganancia= ${porcentajeGanancia}%\nPrecio de venta sin iva= ${precioVentaSinIvaM}\nIva total(21%)= ${ivaTotalM}\nPrecio sugerido de venta al público con iva= ${precioVentaConIvaM}`);

    //! Preguntar al usuario si quiere continuar realizando cálculos o finalizar

    exit = prompt(`Desea hacer otra operación?\ns / n`);

    while (exit != "s" && exit != "n") {
      exit = prompt(`Desea hacer otra operación?\ns / n`);
    }
  } else {
    alert("No es número, por favor ingrese un número");
    continue;
  }
}

//! Saludo final

alert(`Hasta pronto ${userName}!\nGracias por utilizar la calculadora!`);