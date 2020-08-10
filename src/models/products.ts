const products:Products[] = []

export class Products {
  private title: string;
  private imageUrl:string;
  private description:string;
  private price:number;
  private id: string;
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

  static fetchAll() {
    return products;
  }
  
  static getById(id:string) {
    return products.find(prod => prod.id === id);
  }
}
