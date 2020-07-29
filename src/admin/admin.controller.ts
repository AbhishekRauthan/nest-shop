import { Controller, Get, Render, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
  @Get('/add-product')
  @Render('add-product')
  addProductPage() {
    return {}
  }

  @Post('/add-product')
  addProduct(@Body() body, @Res() res:Response) {
    console.log('body', body);
    res.redirect('/');
  }
}
