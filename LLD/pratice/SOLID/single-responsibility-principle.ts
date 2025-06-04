class Product {
  constructor(public readonly name: string, public readonly price: number) {}
}

class ShoppingCart {
  #products: Product[] = []; // ECMAScript‐private

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

class ShoppingCartStorage {
  constructor(private readonly cart: ShoppingCart) {}

  saveToDB() {
    console.log("Saving shopping cart to database...");
  }
}

function main() {
  const cart = new ShoppingCart();
  cart.addProducts(new Product("Laptop", 50000));
  cart.addProducts(new Product("Mouse", 20000));

  console.log("Total PKR:", cart.totalPrice());

  const db = new ShoppingCartStorage(cart);

  db.saveToDB();
}

main();
