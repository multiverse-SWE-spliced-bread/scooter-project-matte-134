const User = require('../src/User')
const Employee = require('../src/Employee')
const ScooterApp = require('../src/ScooterApp')

const app = new ScooterApp()
const matt = app.registerNew('matthew', '123456', 19)
console.log(app.users)
let login = app.login('matthew', '123456')
