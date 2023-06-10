/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
    describe('with ports and ships', () => {
        let port;
        let ship;
        let titanic;
        let queenMary;
       
        beforeEach(() => {
         port = new Port('Dover');
         ship = jest.fn();
         titanic = jest.fn();
         queenMary = jest.fn();
       });
    it('has a name property', () => {
       

       expect(port.name).toBe('Dover');
    });
    
    it('adds ship to a ports ships property when it docks', () => {
        

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    
    it('can remove a ship', () => {
        

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});
    
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});

