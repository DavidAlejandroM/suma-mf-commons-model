import { Country } from './../../../../src';

describe('Country Interface', () => {
  let testCountry: Country;

  beforeEach(() => {
    testCountry = {
      id: 1,
      name: 'Test Country',
      phoneCode: '+123',
      numericCode: '123',
      region: 'Test Region',
      subRegion: 'Test Subregion',
      tzName: 'Test Timezone',
      gmtOffsetName: 'GMT+1',
      gmtOffset: 1,
      latitude: '40.7128° N',
      longitude: '74.0060° W',
    };
  });

  it('should have all required properties', () => {
    expect(testCountry).toHaveProperty('id');
    expect(testCountry).toHaveProperty('name');
    expect(testCountry).toHaveProperty('phoneCode');
    expect(testCountry).toHaveProperty('numericCode');
    expect(testCountry).toHaveProperty('region');
    expect(testCountry).toHaveProperty('subRegion');
    expect(testCountry).toHaveProperty('tzName');
    expect(testCountry).toHaveProperty('gmtOffsetName');
    expect(testCountry).toHaveProperty('gmtOffset');
    expect(testCountry).toHaveProperty('latitude');
    expect(testCountry).toHaveProperty('longitude');
  });

  it('should have correct types for properties', () => {
    expect(typeof testCountry.id).toBe('number');
    expect(typeof testCountry.name).toBe('string');
    expect(typeof testCountry.phoneCode).toBe('string');
    expect(typeof testCountry.numericCode).toBe('string');
    expect(typeof testCountry.region).toBe('string');
    expect(typeof testCountry.subRegion).toBe('string');
    expect(typeof testCountry.tzName).toBe('string');
    expect(typeof testCountry.gmtOffsetName).toBe('string');
    expect(typeof testCountry.gmtOffset).toBe('number');
    expect(typeof testCountry.latitude).toBe('string');
    expect(typeof testCountry.longitude).toBe('string');
  });
});
