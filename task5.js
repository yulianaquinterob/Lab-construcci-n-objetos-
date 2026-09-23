// ¡Escribe tu código debajo de esta línea!

function FriendList(nombres = []){
    this.nombres = nombres;
    this.agregar = function (elemento){
        this.nombres.push(elemento);
    }

}

const nombres1 = new FriendList ([process.argv[4], process.argv[5], process.argv[6]])

console.log(nombres1.nombres);

// ¡Escribe tu código encima de esta línea!    this.agregar = function (elemento) {
