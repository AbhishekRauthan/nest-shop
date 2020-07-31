import { Controller, Get, Render, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from 'src/app.service';

@Controller('admin')
export class AdminController {

  constructor(private appService: AppService) {
  }

  @Get('/add-product')
  @Render('add-product')
  addProductPage() {
    return {
      pageTitle: 'Add Product',
      path: '/admin/add-product'
    }
  }

  @Post('/add-product')
  addProduct(@Body() body, @Res() res: Response) {
    const product:string = body.title
    console.log('product', product);
    this.appService.addProduct(product);
    res.redirect('/');
  }
}
