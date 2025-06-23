import { CartItem } from './interfaces/cart-items'

class Product implements CartItem {
  name: string
  price: number
  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
}

export default Product
