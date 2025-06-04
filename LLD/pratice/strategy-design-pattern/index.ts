interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} via crdit card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} via PayPal card`);
  }
}

class CryptoPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} via Crypto payment`);
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  processPayment(amount: number) {
    this.strategy.pay(amount);
  }
}

function main() {
  const process = new PaymentProcessor(new CreditCardPayment());

  process.processPayment(100);

  process.setStrategy(new PayPalPayment());

  process.processPayment(200);
}

main();
