#include <iostream>
#include <vector>

using namespace std;


class Product {
    public:
    string name;
    double price;

    Product(string name, double price) {
        this->name = name;
        this->price = price;
    }

}


// Only responsible for cart related business login
class ShoppingCart {
    private:
    vector<Product*> products; // Store products

    public:
    void addProduct(Product* p) {
        products.push_back(p);
    }

    const vector<Product*>& getProducts() {
        return products;
    }

    double calculateTotal() {
        double total = 0;
        for (auto p : products) {
            total += p->price;
        }
        return total;
    }

}


// Only responsible for printing invoices
class ShoppingCartPrinter {
    private:
    ShoppingCart* cart;

    public:
     ShoppingCartPrinter(ShoppingCart* cart) { 
        this->cart = cart; 
    }

    void printInvoice() {
        cout << "Shopping Cart Invoice:\n";
        for (auto p : cart->getProducts()) {
            cout << p->name << " - Rs " << p->price << endl;
        }
        cout << "Total: Rs " << cart->calculateTotal() << endl;
    }

}


// Only responsible for saving cart to DB
class ShoppingCartStorage {
    private:
    ShoppingCart* cart; 

    public:
    ShoppingCartStorage(ShoppingCart* cart) { 
        this->cart = cart; 
    }

    void saveToDatabase() {
        cout << "Saving shopping cart to database..." << endl;
    }

}




int main() {
    ShoppingCart* cart = new ShoppingCart();

    cart->addProduct(new Product("Laptop", 50000));
    cart->addProduct(new Product("Mouse", 2000));

    ShoppingCartPrinter* printer = new ShoppingCartPrinter(cart);
    printer->printInvoice();

    ShoppingCartStorage* db = new ShoppingCartStorage(cart);
    db->saveToDatabase();

    return 0;
}