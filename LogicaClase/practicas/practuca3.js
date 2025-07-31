function imc(weight, height) {
  return weight / (height * height);
}

function factorial(n){
  let result = 1;
  for (let i = 2; i <= n; i++){
    result *=i
  }
  return result;
}

// function cambioMoneda(monto,monedaOrigen, MonedaDestino){
//   if (monedaOrigen === MonedaDestino) {
//     return monto;
//   } else if (monedaOrigen === "USD" && MonedaDestino === "EUR") {
//     return monto * 0.85;
//   } else if (monedaOrigen === "EUR" && MonedaDestino === "USD") {
//     return monto / 0.85;
//   } else if (monedaOrigen === "USD" && MonedaDestino === "GBP") {
//     return monto * 0.75;
//   } else if (monedaOrigen === "GBP" && monedaDestino === "USD") {
//     return monto / 0.75;
//   } else if (monedaOrigen === "EUR" && MonedaDestino === "GBP") {
//     return monto * 1.18;
//   } else if (monedaOrigen === "GBP" && monedaDestino === "EUR") {
//     return monto / 1.18;
//   } else if (monedaOrigen === "USD" && MonedaDestino === "COP") {
//     return monto * 3700;
//   } else if (monedaOrigen === "COP" && monedaDestino === "USD") {
//     return monto / 3700;
//   } else if (monedaOrigen === "EUR" && MonedaDestino === "COP") {
//     return monto * 4030;
//   } else if (monedaOrigen === "COP" && monedaDestino === "EUR") {
//     return monto / 4030;
//   } else if (monedaOrigen === "GBP" && MonedaDestino === "COP") {
//     return monto * 4885;
//   } else if (monedaOrigen === "COP" && monedaDestino === "GBP") {
//     return monto / 4885;
//   } else if (monedaOrigen === "USD" && monedaDestino === "BRL") {
//     return monto * 4.80;
//   } else if (monedaOrigen === "BRL" && monedaDestino === "USB") {
//     return monto * 4.80;
//   } else {
//     return "Error: Moneda origen y destino no válidas.";
//   }
// }

function cambioMoneda(monto, monedaOrigen, monedaDestino) {
  const tasas = {
    USB: 1,
    EUR: 0.85,
    GBP: 0.75,
    COP: 3700,
    BRL: 4.80,
  };

  if (!tasas[monedaOrigen] || !tasas[monedaDestino]){
    return "Error: Moneda origen y/o destino no válidas.";
  }

  const montoEnUSD = monto / tasa[monedaOrigen];
  const montoEnDestino = montoEnUSD * tasas[monedaDestino];

  return montoEnDestino;
}

function areaPerimetroTriangulo(base, altura) {
  const area = (base * altura) / 2;
  const perimetro = base + base + altura;
  return alet(`${area}  cm² ${perimetro} cm`);
}

function areaPerimetroCirculo(radio) {
  const area = Math.PI * Math.pow(radio, 2);
  const perimetro = 2 * Math.PI * radio;
  return `Area: ${area.toFixed(2)} cm² Perimetro: ${perimetro.toFixed(2)} cm`;
}

function tablaMultiplicar(n) {
  let table = '';
  for (let i = 1; i <= 10; i++){
    table += `${n} x ${i} = ${n*i} \n`;
  }
  return table;
}