import { Controller, Get, Render, Post, Body, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import { Products } from 'src/models/products';

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
  }

  @Get('/edit-product/:productId')
  @Render('admin/edit-product')
  editProductPage(@Param('productId') prodId: string, @Res() res: Response) {
    const prod = Products.getById(prodId);
    if (prod) {
      return {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        product: prod
      }
    } else {
      return res.redirect('/')
    }
  }

  @Post('/edit-product')
  updateProduct(@Body() body, @Res() res: Response) {
    const prod:Products = body;
    Products.update(prod.id, prod);
    res.redirect('/');
  }

  @Post('/add-product')
  addProduct(@Body() body, @Res() res: Response) {
    const { title, imageUrl, description, price } = body;
    const product = new Products(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
  }
}
