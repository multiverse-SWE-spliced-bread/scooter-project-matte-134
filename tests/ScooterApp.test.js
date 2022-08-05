const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')


describe('Testing the ScooterApp properties', () => {
    test('Testing that users is an array of users', () => {
        let sa1 = new ScooterApp()
        expect(sa1.users).toEqual([])
        expect(sa1.employees).toEqual([])
        expect(sa1.scooters).toEqual([])
        expect(sa1.scooterSessions).toEqual([])
    })
})

describe('Testing the register user method', () => {
    test('create a user', () => {
        let sa1 = new ScooterApp()
        sa1.registerNew('matthew', '123456', 28)
        expect(sa1.users).toEqual([{username: 'matthew', password: '123456', age: 28, scooter: null, loggedIn: false}])
    })
    // test("don't create user when they are under 18", () => {
    //     let sa1 = new ScooterApp()
    //     function under18() {
    //         sa1.registerNew('matthew', '123456', 17)}
    //     expect(under18()).toThrowError()
    // })
})

describe('Testing the login user method', () => {
    test('login a user', () => {
        let sa1 = new ScooterApp()
        sa1.registerNew('matthew', '123456', 28)
        sa1.login('matthew', '123456')
        expect(sa1.users.loggedIn).toBe(true)
    })
})
// ScooterApp tests here

// register user

// log in

// add scooter

// remove scooter