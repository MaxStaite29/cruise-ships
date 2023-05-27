/* globals describe it expect */
const Ship = require('../src/cruise-ships.js');

describe('ship', () => {
     it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
     });

     it('has a starting port', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPoint).toBe('Dover');
     });

     it('can set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPoint).toBeFalsy();
     });
});