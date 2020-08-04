import { Controller, Get, Render, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { Products } from 'src/products';

@Controller('admin')
export class AdminController {

  constructor() {
  }

  @Get('/add-product')
  @Render('admin/add-product')
  addProductPage() {
    return {
      pageTitle: 'Add Product',
      path: '/admin/add-product'
    }
  }

  @Get('/products')
  @Render('admin/products')
  getProducts() {
    const products = Products.fetchAll()
    return {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    }
  };


  @Post('/add-product')
  addProduct(@Body() body, @Res() res: Response) {
    const { title, imageUrl, description, price } = body;
    const product = new Products(title, imageUrl, description, price);
    console.log('products', product);
    product.save();
    res.redirect('/');
  }
}
