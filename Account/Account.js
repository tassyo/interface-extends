import { Client } from '../Client/Client.js'

// Class abstract, you cant instance but u can extends
export class Account {
    constructor(initialBalance, client, agency) {
        if (this.constructor === Account) {
            throw new Error(
                'You cant instance Account because that class is Abstract'
            )
        }
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

    // eslint-disable-next-line class-methods-use-this
    withdraw(money) {
        throw new Error('withdraw is abstract method')
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
