const {expect} = require('chai')
const areu = require('../../dist/app.js')
describe('Are U? bundle', () => {
  it('has all members', () => {
    expect(areu.object).to.be.a('function')
    expect(areu.array).to.be.a('function')
    expect(areu.string).to.be.a('function')
    expect(areu.number).to.be.a('function')
    expect(areu.integer).to.be.a('function')
    expect(areu.boolean).to.be.a('function')
    expect(areu.validate).to.be.a('function')
    expect(areu.ArrayChecker).to.be.a('function')
    expect(areu.ObjectChecker).to.be.a('function')
    expect(areu.StringChecker).to.be.a('function')
    expect(areu.TypeChecker).to.be.a('function')
  })
})