const products:Products[] = []

export class Products {
  private title: string;
  constructor(t: string) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}
