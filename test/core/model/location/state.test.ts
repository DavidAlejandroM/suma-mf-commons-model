import { State } from '../../../../src';

describe('State', () => {
  let state: State;

  beforeEach(() => {
    state = {
      id: 1,
      name: 'Test State',
      stateCode: 'TS',
      countryId: 1,
      latitude: '0.0',
      longitude: '0.0',
    };
  });

  it('should have an id', () => {
    expect(state.id).toBeDefined();
    expect(state.id).toBe(1);
  });

  it('should have a name', () => {
    expect(state.name).toBeDefined();
    expect(state.name).toBe('Test State');
  });

  it('should have a stateCode', () => {
    expect(state.stateCode).toBeDefined();
    expect(state.stateCode).toBe('TS');
  });

  it('should have a countryId', () => {
    expect(state.countryId).toBeDefined();
    expect(state.countryId).toBe(1);
  });

  it('should have a latitude', () => {
    expect(state.latitude).toBeDefined();
    expect(state.latitude).toBe('0.0');
  });

  it('should have a longitude', () => {
    expect(state.longitude).toBeDefined();
    expect(state.longitude).toBe('0.0');
  });
});
