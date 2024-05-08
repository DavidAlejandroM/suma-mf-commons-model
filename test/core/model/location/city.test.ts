import { City } from '../../../../src';

describe('City Interface', () => {
  let testCity: City;

  beforeEach(() => {
    testCity = {
      id: 1,
      name: 'Test City',
      stateId: 1,
      countryId: 1,
      latitude: '40.7128° N',
      longitude: '74.0060° W',
    };
  });

  it('should have all required properties', () => {
    expect(testCity).toHaveProperty('id');
    expect(testCity).toHaveProperty('name');
    expect(testCity).toHaveProperty('stateId');
    expect(testCity).toHaveProperty('countryId');
    expect(testCity).toHaveProperty('latitude');
    expect(testCity).toHaveProperty('longitude');
  });

  it('should have correct types for properties', () => {
    expect(typeof testCity.id).toBe('number');
    expect(typeof testCity.name).toBe('string');
    expect(typeof testCity.stateId).toBe('number');
    expect(typeof testCity.countryId).toBe('number');
    expect(typeof testCity.latitude).toBe('string');
    expect(typeof testCity.longitude).toBe('string');
  });
});
