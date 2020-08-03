import { Controller, Get, Render } from '@nestjs/common';
import { Products } from 'src/products';

@Controller('')
export class ShopController {
  constructor() { }
  
  @Get()
  @Render('shop/product-list')
  mainPage() {
    const products = Products.fetchAll();
    console.log(products);
    return {
      pageTitle:'Shop',
      prods: products,
      path:'/'
    }
  }

  // @Get('product')

  // @Get('cart')

  // @Get('checkout')
}
