import { CartItem } from './interfaces/cart-items'

export class shoppingCart {
  private readonly _items: CartItem[] = []

  get items(): Readonly<CartItem[]> {
    return this._items
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

  isEmpty(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo.')
    this._items.length = 0
  }
}
