class ProductManager {
    #products
    #error
    constructor(){
        this.#products = []
        this.#error = undefined
    }

    getProducts = () => {
        return this.#products
    }

    getEventById = (id) => {
        const product = this.#products.find(item => item.id === id)
        if (!product) return 'Not Found'
        return product
    }

    #generateID = () => {
        return (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id +1
    }

    #validateProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            this.#error = `${title}: Falta rellenar campos obligatorios`

        } else {
            const found = this.#products.find(item => item.code === code)
            if (found) this.#error = `${title}: El Code ya existe`
        }
    }

    addProducts = (title, description, price, thumbnail, code, stock) => {
        this.#validateProduct(title, description, price, thumbnail, code, stock)
        if (this.#error === undefined)
            this.#products.push({id:this.#generateID(), title, description, price, thumbnail, code, stock})     
        else
            console.log(this.#error)
        this.#error = undefined
    }
}

const products = new ProductManager()
products.addProducts('PC Gamer 1', 'Juega todo en Ultra 1080p 60 fps ;)', 500, 'img1', '1001', 20)
products.addProducts('PC Gamer 2', 'Juega todo en Ultra 1080p 120 fps ;)', 700, 'img2', '1002', 15)
products.addProducts('PC Gamer 3', 'Juega todo en Ultra 1080p 165 fps ;)', 800, '1002', 15)
products.addProducts('PC Gamer 4', 'Juega todo en Ultra 1440p 120 fps ;)', 900, 'img4', '1003', 15)
products.addProducts('PC Gamer 5', 'Juega todo en Ultra 1440p 165 fps ;)', 1200, 'img4', '1003', 15)

console.log(products.getProducts())
console.log('\nProducto buscado por Id:\n')
console.log(products.getEventById(3))
console.log(products.getEventById(7))
