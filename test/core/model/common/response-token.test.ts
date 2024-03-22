import { Client, ResponseToken, User } from '../../../../src';
// Suponiendo que estas son representaciones básicas de tus interfaces User y Client
const testUser: User = {
  id: '',
  document: '',
  typeDocument: '',
  enable: false,
  isTemporalPassword: false,
  token: '',
  names: '',
  lastNames: '',
  customer: '',
  phone: '',
  role: [],
  email: '',
  creationUserId: '',
  creationDate: '',
  modificationUser: '',
  modificationDate: '',
  modificationUserId: '',
  newUser: false,
  roleEnums: [],
  emails: [],
  documentId: '',
  typeDocumentId: '',
  profilePhotoPath: '',
  profilePhotoBase64: '',
};

const testClient: Client = {
  name: '',
  document: '',
  typeDocument: '',
  webPatch: '',
  businessSector: '',
};
describe('ResponseToken Interface', () => {
  it('should have all required properties with correct types', () => {
    const testResponseToken: ResponseToken = {
      token: 'some-token',
      idCurrentClient: 'client-id',
      idCurrentDepartment: 'department-id',
      roles: ['admin', 'user'],
      user: testUser,
      client: testClient,
      clients: [testClient], // Asumiendo que es un array de objetos Client
      isTemporalPassword: false,
      activeRole: 'user',
    };

    // Verificar la presencia de cada propiedad
    expect(testResponseToken).toHaveProperty('token');
    expect(testResponseToken).toHaveProperty('idCurrentClient');
    expect(testResponseToken).toHaveProperty('idCurrentDepartment');
    expect(testResponseToken).toHaveProperty('roles');
    expect(testResponseToken).toHaveProperty('user');
    expect(testResponseToken).toHaveProperty('client');
    expect(testResponseToken).toHaveProperty('clients');
    expect(testResponseToken).toHaveProperty('isTemporalPassword');
    expect(testResponseToken).toHaveProperty('activeRole');

    // Verificar el tipo de cada propiedad, si es necesario
    expect(typeof testResponseToken.token).toBe('string');
    expect(typeof testResponseToken.idCurrentClient).toBe('string');
    expect(typeof testResponseToken.idCurrentDepartment).toBe('string');
    expect(Array.isArray(testResponseToken.roles)).toBe(true);
    expect(typeof testResponseToken.isTemporalPassword).toBe('boolean');
    expect(typeof testResponseToken.activeRole).toBe('string');
    // Aquí podrías añadir más verificaciones de tipo si es necesario, como para 'user' y 'client'
  });
});
