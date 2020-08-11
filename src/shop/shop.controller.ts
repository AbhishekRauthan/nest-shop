import { Controller, Get, Render, Param, Post, Body, Res } from '@nestjs/common';
import { Products } from 'src/models/products';
import {Cart} from 'src/models/cart'
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
    return {
      pageTitle: 'Your Cart',
      path: '/cart'
    }
  }

  @Post('cart')
  addToCart(@Body('productId') id: string, @Res() res:Response) {
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
