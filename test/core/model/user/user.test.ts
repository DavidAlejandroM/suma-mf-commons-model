import { RoleEnum, User } from '../../../../src';

describe('User Interface', () => {
  // Caso de prueba para la creación de un usuario y la verificación de tipos básicos
  it('should allow creation with all properties including arrays and enums', () => {
    const testUser: User = {
      id: 'user123',
      document: '1234567890',
      typeDocument: 'ID',
      enable: true,
      isTemporalPassword: false,
      token: 'token123',
      names: 'John',
      lastNames: 'Doe',
      customer: 'Customer1',
      phone: '1234567890',
      role: ['admin'],
      email: 'john.doe@example.com',
      creationUserId: 'creator123',
      creationDate: '2023-01-01',
      modificationUser: 'modifier123',
      modificationDate: '2023-01-02',
      modificationUserId: 'modifier321',
      newUser: true,
      enabled: true, // Propiedad opcional
      roleEnums: [RoleEnum.ROLE_USER, RoleEnum.ROLE_ADMIN],
      emails: ['john.doe@example.com', 'johndoe@gmail.com'],
      documentId: 'doc123',
      typeDocumentId: 'type123',
      profilePhotoPath: '/path/to/photo',
      profilePhotoBase64: 'base64string',
    };

    // Verificación básica de propiedades
    expect(testUser).toHaveProperty('id', 'user123');
    expect(testUser).toHaveProperty('email', 'john.doe@example.com');
    // Verificar que roleEnums contiene enums válidos
    expect(testUser.roleEnums).toContain(RoleEnum.ROLE_USER);
    expect(testUser.roleEnums).toContain(RoleEnum.ROLE_ADMIN);
    // Verificar arrays
    expect(testUser.emails.length).toBe(2);
    expect(testUser.emails).toEqual(
      expect.arrayContaining(['john.doe@example.com', 'johndoe@gmail.com'])
    );
    // Verificar propiedades opcionales
    expect(testUser).toHaveProperty('enabled', true);

    // Más pruebas de tipos según sea necesario
    expect(typeof testUser.newUser).toBe('boolean');
    expect(Array.isArray(testUser.roleEnums)).toBe(true);
  });

  // Caso de prueba para verificar el manejo de valores por defecto o condiciones especiales
  it('should handle default values for optional properties correctly', () => {
    // Crear usuario sin definir todas las propiedades, especialmente las opcionales
    const minimalUser: User = {
      id: 'user124',
      document: '0987654321',
      typeDocument: 'Passport',
      enable: false,
      isTemporalPassword: true,
      token: 'token124',
      names: 'Jane',
      lastNames: 'Smith',
      customer: 'Customer2',
      phone: '0987654321',
      role: ['user'],
      email: 'jane.smith@example.com',
      creationUserId: 'creator124',
      creationDate: '2023-02-01',
      modificationUser: 'modifier124',
      modificationDate: '2023-02-02',
      modificationUserId: 'modifier421',
      newUser: false,
      roleEnums: [RoleEnum.ROLE_USER],
      emails: ['jane.smith@example.com'],
      documentId: 'doc098',
      typeDocumentId: 'type098',
      profilePhotoPath: '/path/to/jane/photo',
      profilePhotoBase64: 'base64stringofphoto',
    };

    // Si hay propiedades opcionales con valores predeterminados implícitos o condiciones especiales, verifica aquí
    // Por ejemplo, verificar si 'enabled' tiene un valor predeterminado implícito
    expect(minimalUser.enabled).toBeUndefined(); // O .toBe(true) si hay un valor predeterminado implícito en tu lógica de aplicación

    // Verificar tipos de propiedades opcionales y condiciones especiales
    expect(minimalUser.roleEnums).toContain(RoleEnum.ROLE_USER);
  });

  // Añadir más casos de prueba según sea necesario para cubrir otros casos de uso, valores límite o validaciones específicas
});
