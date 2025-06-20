import { shoppingCart } from './shopping-cart.js'

const shoppiingCart = new shoppingCart()
shoppiingCart.addItem({ name: 'Camiseta', price: 49.9 })
shoppiingCart.addItem({ name: 'Caderon', price: 9.9 })
shoppiingCart.addItem({ name: 'Lápis', price: 1.59 })

console.log(shoppiingCart.items)
console.log(shoppiingCart.total())
console.log(shoppiingCart.orderStatus)
shoppiingCart.checkout()
console.log(shoppiingCart.orderStatus)
