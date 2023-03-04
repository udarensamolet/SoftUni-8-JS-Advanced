const { expect } = require('chai')
const { sum } = require('./04.SumOfNumbers')

describe('Sum Array', () => {
    it('Adds numbers', () => {
        expect(sum([1,2])).to.equal(3)
    })
    it('Works with strings', () => {
        expect(sum(['1','2'])).to.equal(3)
    })
})