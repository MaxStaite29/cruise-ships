/* globals describe it expect */
const Ship = require('../src/cruise-ships.js');

describe('ship', () => {
   describe('with ports and an itinerary', () => {
     let ship;
     let dover;
     let calais;
     let itinerary;
     
      beforeEach(() => {
       dover = {
         addShip: jest.fn(),
         removeShip: jest.fn(),
         name: 'Dover',
         ships: []
       };
       calais = {
         addShip: jest.fn(),
         removeShip: jest.fn(),
         name: 'Calais',
         ships: []
       };

       itinerary = { ports:[dover, calais]};
       ship = new Ship(itinerary);
     });
      

     it('returns an object', () => {
       expect(ship).toBeInstanceOf(Object);
     });
     
     it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
     });
     
     it('can set sail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
     });
     
     it('gets added to port on instantiation', () => {
        expect(dover.addShip).toHaveBeenCalledWith(ship);
     });
     
     it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();
        
        expect(ship.currentPort).toBe(calais);
        expect(calais.addShip).toHaveBeenCalledWith(ship);
     });
        
        
   
      it('cant sail further than it itinerary', () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
     });
});
});
     

     

     
        
     

     