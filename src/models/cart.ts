let cart: Cart = { products: [], totalPrice: 0 }

export class Cart {
  public products: Prod[];
  public totalPrice: number;

  static addToCart(id: string, prodPrice: number) {
    const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
    const existingProduct = cart.products[existingProductIndex];
    let updatedProduct: Prod;

    if (existingProduct) {
      updatedProduct = { ...existingProduct };
      updatedProduct.qty += 1;
      cart.products[existingProductIndex] = updatedProduct;
    } else {
      updatedProduct = { id: id, qty: 1 };
      cart.products.push(updatedProduct);
    }
    cart.totalPrice = cart.totalPrice + +prodPrice;
  }

  static delete(id: string, price: number) {
    const product = cart.products.find(p => p.id === id);
    const productQty = product.qty;
    cart.totalPrice = cart.totalPrice - (productQty * price);
    cart.products = cart.products.filter(p => p.id !== id);
    console.log(cart);
  }
}

interface Prod {
  id: string;
  qty: number;
}
