import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  products: string[] = [];

  addProduct(product: string): void {
    console.log('inside service: ', product);
    this.products.push(product);
  }

  getAllProducts(): string[] {
    console.log('inside service: ', this.products);
    return this.products
  }

}
