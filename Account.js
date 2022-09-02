import { Client } from './Client.js'

export class Account {
    constructor(initialBalance, client, agency) {
        this._balance = initialBalance
        this._client = client
        this._agency = agency
    }

    get client() {
        return this._client
    }

    set client(value) {
        if (value instanceof Client) {
            this._client = value
        }
    }

    get balance() {
        return this._balance
    }

    withdraw(money) {
        const fee = 1
        return this._withdraw(money, fee)
    }

    _withdraw(money, fee) {
        const moneyWithdraw = fee * money
        if (this._balance >= moneyWithdraw) {
            this._balance -= moneyWithdraw
            return moneyWithdraw
        }
        return 0
    }

    deposit(money) {
        this._balance += money
    }

    transfer(money, account) {
        const withdrawMoney = this.withdraw(money)
        account.deposit(withdrawMoney)
    }
}
