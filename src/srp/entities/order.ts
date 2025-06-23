import { OrderStatus } from './interfaces/order-status'
import Messaging from '../services/messaging'
import Persistency from '../services/persistency'
import { shoppingCart } from './shopping-cart'

class Order {
  private _orderStatus: OrderStatus = 'open'

  constructor(
    private readonly cart: shoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vázio!')
      return
    }
    this._orderStatus = 'closed'
    this.messaging.sendMessage('Seu pedido foi recebido')
    this.persistency.saveOrdem()
    this.cart.clear()
  }
}
export default Order
