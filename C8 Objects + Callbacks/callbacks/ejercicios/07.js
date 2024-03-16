function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var elementosConA = [];
   for (var i = 0; i < array.length; i++) {
     if (array[i][0] === 'a' || array[i][0] === 'A') {
       elementosConA.push(array[i]);
     }
   }
   return elementosConA;
}

module.exports = filter;
