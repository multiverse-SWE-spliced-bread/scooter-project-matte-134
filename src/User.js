const ScooterApp = require("./ScooterApp")

class User {
    constructor (username, password, age) {
      this.username = username
      this.password = password
      this.age = age
      this.scooter = []
      this.loggedIn = false
    }

    changePass (password, newPassword) {
      if (this.password === password) {
        this.password = newPassword
      }
    }

    markScooter (scooter) {
      scooter.isBroken = true
    }
    
  }

class Employee extends User {
    constructor (username, password, age, employeeID) {
      super(username, password, age)
      this.employeeID = employeeID
    }

    repairScooter (scooter) {
      if (scooter.isBroken === true) {
        scooter.repair()
      }
    }

    addScooter (employeeID, password, ID, chargingDock) {
      if (this.employeeID === employeeID) {
        if (this.password === password) {
          if (chargingDock.scooters.length < chargingDock.maxCap) {
            let newScooter = new Scooter(ID)
            ScooterApp.scooters.push(newScooter)
            chargingDock.scooters.push(newScooter)
          } else {
            alert('Charging Dock at full capacity')
          }
        } else {
          alert('Sorry, password incorrect. Please try again')
        }
      } else {
        alert('EmployeeID not recognised')
      }
  }
  
  module.exports = { User, Employee }