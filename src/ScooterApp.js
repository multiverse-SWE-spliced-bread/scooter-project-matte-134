const User = require('./User')

class ScooterApp {

  constructor () {
    this.users = []
    this.employees = []
    this.scooters = []
    this.scooterSessions = []
  }

  registerNew (username, password, age) {
    if (this.users.find(u => u.username === username)) throw new Error('This username already exists')
    if (age >= 18) {
      const newUser = new User(username, password, age)
      this.users.push(newUser)
      return newUser
    } else {
      throw new Error('You must be 18 years or older')
    }
  }

  login (username, password) {
    if (this.users.find(u => u.username === username)) {
      let i = this.users.indexOf(this.users.find(u => u.username === username))
      if (this.users[i].password === password) {
        this.users.loggedIn = true
        console.log('You are now logged in')
      } else {
        console.log('Your password is incorrect, please try again')
      }
    } else {
      console.log("That username doesn't exist")
    }
  }

}

module.exports = ScooterApp
