export class Product {
  id?: number;
  categoryId?: number;
  productName?: string;
  price?: number;

  constructor({ id, categoryId, productName, price }) {
    if (id !== null) {
      this.id = id;
      this.categoryId = categoryId;
      this.productName = productName;
      this.price = price;
    }
  }
}
