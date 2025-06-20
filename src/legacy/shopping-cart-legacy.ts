type CartItemLegacy = { name: string; price: number }
type OrderStatusLegacy = 'open' | 'closed'

class shoppingCartLegacy {
  private readonly _items: CartItemLegacy[] = []
  private _orderStatus: OrderStatusLegacy = 'open'

  get items(): Readonly<CartItemLegacy[]> {
    return this._items
  }
  get orderStatus(): OrderStatusLegacy {
    return this._orderStatus
  }

  addItem(item: CartItemLegacy): void {
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

const shoppiingCartLegacy = new shoppingCartLegacy()
shoppiingCartLegacy.addItem({ name: 'Camiseta', price: 49.9 })
shoppiingCartLegacy.addItem({ name: 'Caderon', price: 9.9 })
shoppiingCartLegacy.addItem({ name: 'Lápis', price: 1.59 })

console.log(shoppiingCartLegacy.items)
console.log(shoppiingCartLegacy.total())
console.log(shoppiingCartLegacy.orderStatus)
shoppiingCartLegacy.checkout()
console.log(shoppiingCartLegacy.orderStatus)
