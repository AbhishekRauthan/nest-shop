let products: Products[] = []

export class Products {
  public title: string | null;
  public imageUrl: string;
  public description: string;
  public price: number;
  public id: string;
  constructor(id: string | null, title: string, imageUrl: string, description: string, price: number) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    if (this.id) {
      const existingProductIndex = products.findIndex(p => p.id == this.id);
      console.log(existingProductIndex);
      const updatedProds = [...products]
      updatedProds[existingProductIndex] = this;
      products = [...updatedProds]
    } else {
      this.id = Math.random().toString();
      products.push(this);
    }
  }

  static fetchAll() {
    return products;
  }

  static getById(id: string) {
    return products.find(prod => prod.id === id);
  }
}
