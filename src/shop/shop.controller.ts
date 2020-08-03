import { Controller, Get, Render } from '@nestjs/common';
import { Products } from 'src/products';

@Controller('')
export class ShopController {
  constructor() { }

  @Get()
  @Render('shop/index')
  getIndex() {
    const products = Products.fetchAll();
    return {
      pageTitle: 'Shop',
      prods: products,
      path: '/'
    }
  }

  @Get('products')
  @Render('shop/product-list')
  getProduct() {
    const products = Products.fetchAll();
    return {
      pageTitle: 'Shop',
      prods: products,
      path: '/products'
    }
  }

  @Get('cart')
  @Render('shop/cart')
  getCart() {
    return {
      pageTitle: 'Your Cart',
      path: '/cart'
    }
  }

  @Get('checkout')
  @Render('shop/checkout')
  getCheckout() {
    return {
      pageTitle: 'Checkout',
      path: '/checkout',
    }
  }

  @Get('order')
  @Render('shop/orders')
  getOrders() {
    return {
      pageTitle: 'Your Orders',
      path: '/orders',
    }
  }
}
