import { shoppingCart } from './entities/shopping-cart.js'
import Order from './entities/order.js'
import Persistency from './services/persistency.js'
import Messaging from './services/messaging.js'
import Product from './entities/product.js'

const shoppiingCart = new shoppingCart()
const messaging = new Messaging()
const persistency = new Persistency()

const order = new Order(shoppiingCart, messaging, persistency)

shoppiingCart.addItem(new Product('Camiseta', 49.9))
shoppiingCart.addItem(new Product('Caderon', 4.9))
shoppiingCart.addItem(new Product('Lápis', 1.59))

console.log(shoppiingCart.items)
console.log(shoppiingCart.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
