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
};

//Only responsible for Cart related business logic.
class ShoppingCart {
private:
    vector<Product*> products;

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
};

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
};

// Only responsible for saving cart to DB
class DBPresistence {
    private:
    ShoppingCart* cart;

    public:
    virtual void save(ShoppingCart* cart) = 0; // Pure virtual function
}

class SQLPresistence: public DBPresistence {
    public:
    void save(ShoppingCart* cart) override {
         cout << "Saving shopping cart to SQL DB..." << endl;
    }
}

class MongoPersistence: public DBPresistence {
    public:
    void save(ShoppingCart* cart) override {
        cout << "Saving shopping cart to Mongo DB..." << endl;
    }
}


class FilePersistence : public Persistence {
    public:
    void save(ShoppingCart* cart) override {
        cout << "Saving shopping cart to a file..." << endl;
    }
};

int main() {
    ShoppingCart* cart = new ShoppingCart();
    cart->addProduct(new Product("Laptop", 50000));
    cart->addProduct(new Product("Mouse", 2000));

    ShoppingCartPrinter* printer = new ShoppingCartPrinter(cart);
    printer->printInvoice();

    DBPresistence* db = new SQLPresistence();
    DBPresistence* mongo = new MongoPersistence();
    DBPresistence* file = new FilePersistence();

    db->save(cart);   // Save to SQL database
    mongo->save(cart); // Save to MongoDB
    file->save(cart);  // Save to File

    return 0;
}