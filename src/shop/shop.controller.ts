import { Controller, Get, Render, Param, Post, Body, Res } from '@nestjs/common';
import { Products } from 'src/models/products';
import { Cart, RenderCart } from 'src/models/cart'
import { Response } from 'express';

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
  getAllProducts() {
    const products = Products.fetchAll();
    return {
      pageTitle: 'Shop',
      prods: products,
      path: '/products'
    }
  }

  @Get('products/:id')
  @Render('shop/product-detail')
  getProduct(@Param('id') productId: string) {
    const product = Products.getById(productId);
    return {
      pageTitle: 'Shop',
      prod: product,
      path: '/products'
    }
  }

  @Get('cart')
  @Render('shop/cart')
  getCart() {
    console.log("inside getCart");
    const cartProds = Cart.getCart().products;
    const prods = Products.fetchAll();
    let renderProds: RenderCart[] = [];
    for (let i = 0; i < cartProds.length; i++) {
      for (let j = 0; j < prods.length; j++) {
        if (cartProds[i].id === prods[j].id) {
          renderProds.push({ product: prods[j], qty: cartProds[i].qty });
        }
      }
    }
    return {
      pageTitle: 'Your Cart',
      path: '/cart',
      products: renderProds
    }
  }

  @Post('/cart-delete-item')
  deleteFromCart(@Body('productId') id: string, @Res() res: Response) {
    const product = Products.getById(id);
    Cart.delete(id, product.price);
    res.redirect('/cart');
  }

  @Post('cart')
  addToCart(@Body('productId') id: string, @Res() res: Response) {
    const product = Products.getById(id);
    Cart.addToCart(id, product.price);
    res.redirect('/cart');
  }

  @Get('checkout')
  @Render('shop/checkout')
  getCheckout() {
    return {
      pageTitle: 'Checkout',
      path: '/checkout',
    }
  }

  @Get('orders')
  @Render('shop/orders')
  getOrders() {
    return {
      pageTitle: 'Your Orders',
      path: '/orders',
    }
  }
}
