function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var elementosVistos = {};
  for (var i = 0; i < numeros.length; i++) {
    if (elementosVistos[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      elementosVistos[numeros[i]] = true;
    }
  }
  return null;
}

module.exports = encontrarElementoRepetido;