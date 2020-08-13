const products:Products[] = []

export class Products {
  public title: string;
  public imageUrl:string;
  public description:string;
  public price:number;
  public id: string;
  constructor(title: string, imageUrl:string, description:string, price:number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    products.push(this);
  }

  static update(id:string, product:Products) {
    const existingProductIndex = products.findIndex(p => p.id === id);
    console.log(product);
    products[existingProductIndex] = product;
  }

  static fetchAll() {
    return products;
  }
  
  static getById(id:string) {
    return products.find(prod => prod.id === id);
  }
}
