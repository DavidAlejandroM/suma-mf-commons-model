import { Client } from '../../../../src/index';

describe('Client Interface', () => {
  it('should have all and only the required properties', () => {
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
      // Asegúrate de incluir aquí todas las propiedades definidas en la interfaz.
      idDepartment: 'dep001',
      newClient: 'Yes', // Asegúrate de agregar nuevas propiedades aquí también.
    };

    const expectedProperties = [
      'id',
      'name',
      'document',
      'typeDocument',
      'departments',
      'creationUserId',
      'creationDate',
      'countryId',
      'stateId',
      'cityId',
      'address',
      'modificationUserId',
      'modificationDate',
      'logoBase64',
      'webPatch',
      'businessSector',
      'idDepartment',
      'newClient', // Incluye todas las propiedades esperadas aquí.
    ];

    const testClientProperties = Object.keys(testClient);

    // Verifica que no haya más ni menos propiedades de las esperadas
    expect(testClientProperties.length).toBe(expectedProperties.length);

    // Verifica que todas las propiedades esperadas estén presentes
    expectedProperties.forEach(property => {
      expect(testClientProperties).toContain(property);
    });
  });
});
