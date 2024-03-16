function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var nuevoArreglo = [];
  for (var i = 0; i < arreglo.length; i++) {
    nuevoArreglo.push(arreglo[i] * i);
  }
  return nuevoArreglo;
}

module.exports = multiplicarElementosPorIndice;
