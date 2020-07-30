import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private products:string[] = [];
  
  getAllProducts():string[] {
    return this.products
  }

  addProduct(title:string):void {
    this.products.push(title);
  }
  
}
