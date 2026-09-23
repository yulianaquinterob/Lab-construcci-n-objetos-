// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
  this.imprimirCorreo = function(){
    return `${asunto}: ${mensaje}`
  }

}

const nuevoCorreo = new Mail(process.argv[3], process.argv[4]);

// ¡Escribe tu código encima de esta línea!

console.log(nuevoCorreo.imprimirCorreo());