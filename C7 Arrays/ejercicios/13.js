function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var arregloPares = [];
  for (var i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === 'number' && arreglo[i] % 2 === 0) {
      arregloPares.push(arreglo[i]);
    }
  }
  return arregloPares;
}

module.exports = filtrarNumerosPares;
