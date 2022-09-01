// eslint-disable-next-line import/extensions
import { Client } from './Client.js'

export class CheckingAccount {
    static numberAccounts = 0

    constructor(agency, client) {
        this.client = client
        this.agency = agency
        this._balance = 0
        CheckingAccount.numberAccounts += 1
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
        if (money <= 0) return
        this._balance += money
    }

    transfer(money, account) {
        const withdrawMoney = this.withdraw(money)
        account.deposit(withdrawMoney)
    }
}
