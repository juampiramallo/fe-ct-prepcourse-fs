function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (var i = 1; i < arreglo.length; i++) {
    if (arreglo[i] !== arreglo[0]) {
      return false;
    }
  }
  return true;
}

module.exports = todosIguales;
