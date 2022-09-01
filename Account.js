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
        if (this._balance >= money) {
            this._balance -= money
            return money
        }
        return money
    }

    deposit(money) {
        this._balance += money
    }

    transfer(money, account) {
        const withdrawMoney = this.withdraw(money)
        account.deposit(withdrawMoney)
    }
}
