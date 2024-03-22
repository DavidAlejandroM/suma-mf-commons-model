import { FilePostChat } from '../../../../src';

describe('FilePostChat Interface', () => {
  it('should have all required properties', () => {
    const testFilePostChat: FilePostChat = {
      path: 'some/path/to/file',
      filename: 'testfile.png',
      base64: 'data:image/png;base64,...',
      contentType: 'image/png',
    };

    // Lista de propiedades esperadas
    const expectedProperties = ['path', 'filename', 'base64', 'contentType'];

    // Obtiene las propiedades del objeto de prueba
    const filePostChatProperties = Object.keys(testFilePostChat);

    // Verifica que el número de propiedades coincida
    expect(filePostChatProperties.length).toBe(expectedProperties.length);

    // Verifica que todas las propiedades esperadas estén presentes
    expectedProperties.forEach(property => {
      expect(filePostChatProperties).toContain(property);
    });
  });
});
