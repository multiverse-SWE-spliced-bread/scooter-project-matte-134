const User = require('./User')
const Scooter = require('./Scooter')

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

    addScooter (employeeID, password, scooter, chargingDock) {
      if (this.employeeID === employeeID) {
        if (this.password === password) {
          if (chargingDock.scooters.length < chargingDock.maxCap) {
            let newScooter = new Scooter(scooter)
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
  takeScooter (employeeID, scooter, chargingDock) {
    if (scooter.docked === true) {
      if (scooter.charged > 0) {
        this.scooter.push(scooter)
        scooter.docked = false
        let i = chargingDock.scooters.indexOf(scooter)
        chargingDock.scooters.splice(i, 1)
      }
    }
  }
}

module.exports = Employee
