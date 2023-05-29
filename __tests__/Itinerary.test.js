/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
describe('Itinerary', () => {
    
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has a ports property', () => {
        const gloucester = new Port('Gloucester');
        const dover = new Port('Dover');

        const itinerary = new Itinerary([gloucester, dover]);

        expect(itinerary.ports).toEqual([gloucester, dover]);
    });
});