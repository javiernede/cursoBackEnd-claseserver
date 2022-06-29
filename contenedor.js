class Contenedor {

    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.precio = 0;
    }

    mostrarContenido() {
        console.log('Este es el contenido')

    }

    setPrecio(precio) {
        this.precio = precio
    }

}

module.exports = { Contenedor }