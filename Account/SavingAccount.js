import { Account } from './Account.js'

export class SavingAccount extends Account {
    // eslint-disable-next-line no-useless-constructor
    constructor(initialBalance, client, agency) {
        super(initialBalance, client, agency)
    }

    // override withdraw
    withdraw(money) {
        const fee = 1.1
        return this._withdraw(money, fee)
    }
}
