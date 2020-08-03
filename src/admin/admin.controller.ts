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

  @Get('products')

  @Post('/add-product')
  addProduct(@Body() body, @Res() res: Response) {
    const product: string = body.title
    console.log('product', product);
    const prod = new Products(product).save();
    res.redirect('/');
  }
}
