import { Manager } from './Employee/Manager.js'
import { Director } from './Employee/Director.js'
import { Authentication } from './Authentication/index.js'

const director = new Director('Director', 10000, '40699509801')
director.createPassword(123)

const manager = new Manager('Tassyo', 1000, '40699509800')
manager.createPassword(321)

console.log(
    Authentication.login(director, 123),
    Authentication.login(manager, 123)
)
