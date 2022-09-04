import { Account } from './Account.js'

export class CheckingAccount extends Account {
    static numberAccounts = 0

    constructor(agency, client) {
        super(0, agency, client)
        CheckingAccount.numberAccounts += 1
    }

    withdraw(money) {
        const fee = 1.02
        return this._withdraw(money, fee)
    }
}
