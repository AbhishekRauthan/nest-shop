import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private products: string[] = [];

  getAllProducts(): string[] {
    console.log('inside service: ', this.products);
    return this.products
  }

  addProduct(product: string): void {
    console.log('inside service: ', product);
    this.products = [...this.products, product];
    console.log('products', this.products);
  }

}
