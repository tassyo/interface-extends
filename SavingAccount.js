export class SavingAccount {
    constructor(initialBalance, client, agency) {
        this._balance = initialBalance
        this._client = client
        this._agency = agency
    }

    withdraw(money) {
        if (this._balance >= money) {
            this._balance -= money
            return money
        }
    }

    deposit(money) {
        if (money <= 0) return
        this._balance += money
    }

    transfer(money, account) {
        const withdrawMoney = this.withdraw(money)
        account.deposit(withdrawMoney)
    }
}
