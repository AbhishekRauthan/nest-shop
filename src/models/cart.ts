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
}

interface Prod {
  id: string;
  qty: number;
}
