import { Client } from './Client/Client.js'
import { CheckingAccount } from './Account/CheckingAccount.js'
import { SavingAccount } from './Account/SavingAccount.js'

const client1 = new Client('Ricardo', 11122233309)

const contaCorrenteRicardo = new CheckingAccount(1001, client1)
contaCorrenteRicardo.deposit(500)
contaCorrenteRicardo.withdraw(100)

const contaPoupanca = new SavingAccount(50, client1, 1001)

console.log(contaPoupanca)
console.log(contaCorrenteRicardo)
