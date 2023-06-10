/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has a ports property', () => {
        const gloucester = jest.fn();
        const dover = jest.fn();

        const itinerary = new Itinerary([gloucester, dover]);

        expect(itinerary.ports).toEqual([gloucester, dover]);
    });
});