class Scooter {
  constructor (ID) {
    this.ID = ID
    this.charge = 100
    this.docked = true
    this.isBroken = false
  }

  repair () {
    this.isBroken = false
    }
  

  charge (chargingDock) {
    if (this.charge < 100) {
      if (chargingDock.scooters < chargingDock.maxCap) {
        chargingDock.scooters.push(this)
      }
    }
  }
}

class ChargingDock {
  constructor (location) {
    this.location = location
    this.scooters = []
    this.maxCap = 6
  }

  chargeScooter (scooter) {
    if (scooter.charge < 100) {
      scooter.charge++
    }
  }
}

module.exports = Scooter, ChargingDock
