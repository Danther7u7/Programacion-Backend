class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = Object([libros])
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

     getBookNames() {
        let listLibros = []
        for (let i = 0; i < this.libros.length; i++){
            listLibros.push(this.libros[i].nombre)
        }
        return console.log(listLibros)
    }

    mostrarTodo() {
        return console.log(this.nombre, this.apellido, this.libros, this.mascotas)
    }
}

let p1 = new Usuario("Daniel", "Hevias", {autor:"Matias", nombre:"Libro1"}, ["perro", "gato"])

p1.getFullName()
console.log("Cantidad de mascotas: ")
p1.countMascotas()
console.log("Se agrega mascota!")
p1.addMascota("conejo")
console.log("Cantidad de mascotas: ")
p1.countMascotas()
console.log("Se agregan libros!")
p1.addBook("Daniel", "Libro2")
p1.addBook("Diego", "Libro3")
console.log("Nombres de libros: ")
p1.getBookNames()
console.log(p1)



