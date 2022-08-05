const { User, Employee } = require('./User');
const { Scooter, ChargingDock } = require('./Scooter');

class ScooterApp {
  constructor () {
    this.users = []
    this.employees = []
    this.scooters = []
    this.scooterSessions = []
  }

  registerNew (username, password, age) {
    if (this.users.username !== username) {
      if (age >= 18) {
        let newUser = new User (username, password, age)
        this.users.push(newUser)
      } else {
        alert('You must be 18 or over to register')
      }
    } else {
      alert('This username already exists')
    }
  }

  login (username, password) {
    if (this.users.username === username) {
      if (this.users.password === password) {
        this.users.loggedIn = true
        alert('You are now logged in')
      } else {
        alert('Your password is incorrect, please try again')
      }
    } else {
      alert("That username doesn't exist")
    }
  }

  

module.exports = ScooterApp;
