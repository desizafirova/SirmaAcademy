class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    console.log(`You've made $${amount} deposit to your bank account.`);
    return (this.balance = this.balance + amount);
  }
  withdraw(amount) {
    console.log(`You've just withdrawn $${amount} from your bank account.`);
    return (this.balance = this.balance - amount);
  }
  getBalance() {
    console.log('Your balance:' + ' ' + '$' + this.balance);
    return this.balance;
  }
}

class SavingAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  applyInterest() {
    return (this.balance =
      this.balance + this.balance * (this.interestRate / 100));
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, overdraftLimit) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount > this.overdraftLimit) {
      console.log(
        `You are not allowed to withdraw such amount of money - $${amount}. It is over your limit of $${this.overdraftLimit}!`
      );
      return;
    }
    console.log(`You've just withdrawn $${amount} from your bank account.`);
    return (this.balance = this.balance - amount);
  }
}

const bankAcc = new BankAccount('123', 1500);
bankAcc.deposit(700);
bankAcc.withdraw(200);
bankAcc.getBalance();

const savingAcc = new SavingAccount('456', 1500, 2.3);
savingAcc.deposit(700);
savingAcc.withdraw(200);
savingAcc.applyInterest();
savingAcc.getBalance();

const checkingAcc = new CheckingAccount('789', 1500, 300);
checkingAcc.deposit(700);
checkingAcc.withdraw(200);
checkingAcc.getBalance();
checkingAcc.withdraw(600);
checkingAcc.getBalance();
