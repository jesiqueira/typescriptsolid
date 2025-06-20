type CartItem = { name: string; price: number }
type OrderStatus = 'open' | 'closed'

class shoppingCart {
  private readonly _items: CartItem[] = []
  private _orderStatus: OrderStatus = 'open'

  get items(): Readonly<CartItem[]> {
    return this._items
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  total(): number {
    return +this._items.reduce((total, valorAtual) => total + valorAtual.price, 0).toFixed(2)
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vázio!')
      return
    }
    this._orderStatus = 'closed'
    this.sendMessage('Seu pedido foi recebido')
    this.saveOrdem()
    this.clear()
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  sendMessage(msg: string): void {
    console.log('mensagem enviada: ', msg)
  }
  saveOrdem(): void {
    console.log('Salvo com sucesso')
  }
  clear(): void {
    console.log('Carrinho de compras foi limpo.')
    this._items.length = 0
  }
}

const shoppiingCart = new shoppingCart()
shoppiingCart.addItem({ name: 'Camiseta', price: 49.9 })
shoppiingCart.addItem({ name: 'Caderon', price: 9.9 })
shoppiingCart.addItem({ name: 'Lápis', price: 1.59 })

console.log(shoppiingCart.items)
console.log(shoppiingCart.total())
console.log(shoppiingCart.orderStatus)
shoppiingCart.checkout()
console.log(shoppiingCart.orderStatus)
