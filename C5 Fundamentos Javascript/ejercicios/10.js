function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  function esFechaValida(fecha) {
    
    const fechaObj = new Date(fecha);
  
    
    return !isNaN(fechaObj) && !isNaN(fechaObj.getFullYear());
  }
  
}

module.exports = esFechaValida;