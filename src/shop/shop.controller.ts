import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Products } from 'src/products';

@Controller('')
export class ShopController {
  constructor(private appService:AppService) {
    
  }
  
  @Get()
  @Render('shop')
  mainPage() {
    const products = Products.fetchAll();
    console.log(products);
    return {
      pageTitle:'Shop',
      prods: products,
      path:'/'
    }
  }
}
