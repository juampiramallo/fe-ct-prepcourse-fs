function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
}

module.exports = duplicarElementos;
