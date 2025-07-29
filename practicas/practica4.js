//1 
let listaGenerica = [];

//2 
let lenguagesDeProgramacion = ["JavaScript", "Python", "Java", "C++", "Go"];

//3
lenguagesDeProgramacion.push("Ruby","GoLang","Java2");

//4
function imprimirArray(array){
  array.forEach(element => {
    console.log(element);
  });
}
imprimirArray(lenguagesDeProgramacion);

//5
function imprimirArrayInverso(array){
  array.reverse().forEach(element => {
    console.log(element);
  });
}
imprimirArrayInverso(lenguagesDeProgramacion);

//6
let listaNumerosElegidos = [2, 5, 9, 1, 3];
// function promedioArray(array){
//   let suma = 0;
//   array.forEach(element => {
//     suma+= parseInt(element);
//   });
//   let promedio = suma/array.length;
//   return promedio;
// }

function promedioArray(array) {
  const suma = array.reduce((acc, val) => acc + val, 0);
  return suma / array.length;
}

console.log(promedioArray(listaNumerosElegidos));

// 7
function maxMinArray(array){
  let maximo = Math.max(...array);
  let minimo = Math.min(...array);
  return [maximo, minimo];
}
console.log(maxMinArray(listaNumerosElegidos));

// 8 
function sumArray(array){
  return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0); // reduce() es una función de array que permite recorrer y acumular todos los valores. El primer argumento es la función que se ejecuta en cada paso del recorrido, y el segundo argumento es el valor inicial del acumulador. Y el tercer argumento es el valor inicial del array.
}
console.log(sumArray(listaNumerosElegidos));

//9
function buscarElemento(array, elemento){
  return array.includes(elemento); // includes() es una función de array que devuelve true si el array contiene el elemento, y false en caso contrario.
}
console.log(buscarElemento(lenguagesDeProgramacion, "Ruby"));

//10
let listaUno = [1, 2, 3, 4, 5];
let listaDos = [6, 7, 8, 9, 10];

function sumarListas(listaUno, listaDos){
  if(listaUno.length!== listaDos.length){
    throw new Error("Las listas deben tener la misma longitud.");
  }
  let sumaListas = [];
  for(let i = 0; i < listaUno.length; i++){
    sumaListas.push(listaUno[i] + listaDos[i]);
  }
  return sumaListas;
}
console.log(sumarListas(listaUno, listaDos));

//11
function cuadradoArray(array){
  let cuadrados = [];
  array.forEach(element => {
    cuadrados.push(element * element);
  });
  return cuadrados;
}
console.log(cuadradoArray(listaNumerosElegidos));