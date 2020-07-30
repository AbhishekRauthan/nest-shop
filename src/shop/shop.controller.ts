import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('')
export class ShopController {
  constructor(private appService:AppService) {
    
  }
  
  @Get()
  @Render('shop')
  mainPage() {
    const products:string[] = this.appService.getAllProducts();
    return {
      pageTitle:'Shop',
      prods: products,
      path:'/'
    }
  }
}
