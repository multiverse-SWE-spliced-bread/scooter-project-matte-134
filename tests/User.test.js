const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp')
const Scooter = require('../src/Scooter')
const ChargingDock = require('../src/Scooter')

describe('Testing the user class constructor', () => {
    test('Testing the properties within the class', () => {
        let sa1 = new ScooterApp()
        let testUser = sa1.registerNew('matthew', '123456', 28)
        expect(testUser.username).toBe('matthew')
        expect(testUser.password).toBe('123456')
        expect(testUser.age).toBe(28)
        expect(testUser.scooter).toBe(null)
        expect(testUser.loggedIn).toBe(false)
    })
    test('Testing the change password method', () => {
        let sa1 = new ScooterApp()
        let testUser = sa1.registerNew('matthew', '123456', 28)
        testUser.changePass('123456', '654321')
        expect(testUser.password).toBe('654321')
        testUser.changePass('123456', '1234')
        expect(testUser.password).toBe('654321')
    })
    test('mark scooter method', () => {
        let sa1 = new ScooterApp()
        let testUser = sa1.registerNew('matthew', '123456', 28)
        let scooter = {ID: '1234', charge: 100, docked: true, isBroken: false}
        testUser.markScooter(scooter)
        expect(scooter.isBroken).toBe(true)
    })
    test('rent scooter method', () => {
        let sa1 = new ScooterApp()
        let testUser = sa1.registerNew('matthew', '123456', 28)
        sa1.login('matthew', '123456')
        let scooter = {ID: '1234', charge: 100, docked: true, isBroken: false}
        let chargingDock = {location: 'Manchester', scooters: [scooter], maxCap: 6}
        testUser.rentScooter(scooter, chargingDock)
        expect(testUser.scooter).toEqual({ID: '1234', charge: 100, docked: false, isBroken: false})
        expect(chargingDock.scooters).toEqual([])
    })
})
// User tests here

// test username

// test password

// test age
