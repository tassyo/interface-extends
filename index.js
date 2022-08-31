import {Client} from "./Client.js"
import {CheckingAccount} from './CheckingAccount.js'

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);


const contaCorrenteRicardo = new CheckingAccount(1001, client1);
contaCorrenteRicardo.deposit(500);
contaCorrenteRicardo.withdraw(100);

const conta2 = new CheckingAccount(102, client2);

contaCorrenteRicardo.transfer(200, conta2);

console.log(contaCorrenteRicardo);