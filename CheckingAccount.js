import { Client } from './Client.js'

export class CheckingAccount {
    static numberAccounts = 0
    agency
    _balance = 0
    _client

    set client(value) {
        if (value instanceof Client) {
            this._client = value
        }
    }

    get client() {
        return this._client
    }

    get balance() {
        return this._balance
    }

    constructor(agency, client) {
        this.client = client
        this.agency = agency
        CheckingAccount.numberAccounts += 1
    }

    withdraw(money){
        if(this._balance >= money){
            this._balance-=money
            return money
        }
    }

    deposit(money) {
        if (money <= 0) return
        this._balance += money
    }

    transfer(money, account){
        const withdrawMoney = this.withdraw(money)
        account.deposit(withdrawMoney)
    }
}
