abstract class Account {
  abstract deposit(amount: number): void;
}

abstract class WithdrawableAccount extends Account {
  abstract withDraw(amount: number): void;
}

class SavingAccount extends WithdrawableAccount {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  withDraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn: from Savings Account. New Balance: ${this.balance}`
      );
    } else {
      console.log("Insufficient funds in Savings Account!");
    }
  }
}

class CurrentAccount extends WithdrawableAccount {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  withDraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn: from Current Account. New Balance: ${this.balance}`
      );
    } else {
      console.log("Insufficient funds in Current Account!");
    }
  }
}

class FixedTermAccount extends Account {
  private amount = 0;

  deposit(amount: number) {
    this.amount += amount;
  }
}

function main() {
  const acc = new FixedTermAccount();
  acc.deposit(100);
}

main();
