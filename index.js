import { Manager } from './Employee/Manager.js'
import { Director } from './Employee/Director.js'
import { Authentication } from './Authentication/index.js'
import { Client } from './Client/Client.js'

const director = new Director('Director', 10000, '40699509801')
director.createPassword(123)

const manager = new Manager('Tassyo', 1000, '40699509800')
manager.createPassword(321)

const client = new Client('Fulano', '40699509802', 123)

console.log(
    Authentication.login(director, 123),
    Authentication.login(manager, 123),
    Authentication.login(client, 123)
)
