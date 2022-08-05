class User {
    constructor (username, password, age) {
      this.username = username
      this.password = password
      this.age = age
      this.scooter = null
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

    rentScooter (scooter, chargingDock) {
      if (this.loggedIn === true) {
        if (scooter.docked === true) {
          if (scooter.charge === 100) {
            this.scooter = scooter
            scooter.docked = false
            let i = chargingDock.scooters.indexOf(scooter)
            chargingDock.scooters.splice(i, 1)
        }
      }
    }
  }
}

module.exports = User
