import { Account } from './Account.js'

export class SavingAccount extends Account {
    // eslint-disable-next-line no-useless-constructor
    constructor(initialBalance, client, agency) {
        super(initialBalance, client, agency)
    }
}
