class Product {
  constructor(public readonly name: string, public readonly price: number) {}
}

class ShoppingCart {
  #products: Product[] = [];

  addProducts(product: Product): void {
    this.#products.push(product);
  }

  getProduct(): readonly Product[] {
    return this.#products;
  }

  totalPrice(): number {
    return this.#products.reduce((sum, p) => sum + p.price, 0);
  }
}

abstract class StoragePresistence {
  abstract save(): void;
}

class MySQL extends StoragePresistence {
  save() {
    console.log("Save to MySQL database");
  }
}

class FilePresistence extends StoragePresistence {
  save() {
    console.log("Save to file");
  }
}

function main() {
  const cart = new ShoppingCart();
  cart.addProducts(new Product("Laptop", 50000));
  cart.addProducts(new Product("Mouse", 20000));

  console.log("Total PKR:", cart.totalPrice());

  const file = new FilePresistence();
  const mySql = new MySQL();

  file.save();
  mySql.save();
}

main();
