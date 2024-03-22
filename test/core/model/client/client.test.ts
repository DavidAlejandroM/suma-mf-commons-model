import { Client } from '../../../../src/core/models/client/client';

describe('Client Interface', () => {
  it('should have all required properties', () => {
    const testClient: Client = {
      id: '1',
      name: 'Test Client',
      document: '1234567890',
      typeDocument: 'DNI',
      departments: [],
      creationUserId: 'user123',
      creationDate: '2022-01-01',
      countryId: 1,
      stateId: 1,
      cityId: 1,
      address: '123 Test St',
      modificationUserId: 'user124',
      modificationDate: '2022-01-02',
      logoBase64: 'data:image/png;base64,',
      webPatch: 'www.test.com',
      businessSector: 'Technology',
    };

    // Verifica cada propiedad individualmente
    expect(testClient).toHaveProperty('id');
    expect(testClient).toHaveProperty('name');
    expect(testClient).toHaveProperty('document');
    expect(testClient).toHaveProperty('typeDocument');
    expect(testClient).toHaveProperty('departments');
    expect(testClient).toHaveProperty('creationUserId');
    expect(testClient).toHaveProperty('creationDate');
    expect(testClient).toHaveProperty('countryId');
    expect(testClient).toHaveProperty('stateId');
    expect(testClient).toHaveProperty('cityId');
    expect(testClient).toHaveProperty('address');
    expect(testClient).toHaveProperty('modificationUserId');
    expect(testClient).toHaveProperty('modificationDate');
    expect(testClient).toHaveProperty('logoBase64');
    expect(testClient).toHaveProperty('webPatch');
    expect(testClient).toHaveProperty('businessSector');
    // Añade comprobaciones para otras propiedades según sea necesario
  });
});
