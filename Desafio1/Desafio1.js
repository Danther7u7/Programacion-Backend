class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [Object(libros)]
        this.mascotas = mascotas
    }
    getFullName() {
        return console.log(`Nombre completo: ${this.nombre} ${this.apellido}`)
    }

    addMascota(String) {
        this.mascotas.push(String)
    }

    countMascotas() {
        return console.log(this.mascotas.length)
    }

    addBook(Autor, Nombre) {
        this.libros.push({autor:Autor, nombre:Nombre})
    }

    // getBookNames() {
    //     return console.log(this.libros[][])
    // }
}

let p1 = new Usuario("Daniel", "Hevias", {autor:"Matias", nombre:"Libro1"}, ["mascota1", "mascota2"])

p1.getFullName()
p1.countMascotas()
p1.addMascota("mascota3")
p1.addBook("Daniel", "Libro2")
p1.addBook("Diego", "Libro3")




