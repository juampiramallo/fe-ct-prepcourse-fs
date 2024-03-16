function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var nuevoArreglo = [];
  for (var i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === 'string') {
      nuevoArreglo.push(arreglo[i].toUpperCase());
    } else {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
}

module.exports = convertirStringAMayusculas;
