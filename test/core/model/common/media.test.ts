import { Media, MediaType } from '../../../../src';

describe('Media Interface', () => {
  it('should have all required properties', () => {
    // Creando un objeto de prueba que cumpla con la interfaz Media
    const testMedia: Media = {
      id: '1',
      type: MediaType.IMAGE, // Suponiendo que MediaType es un enum que incluye 'IMAGE' como uno de sus valores
      url: 'https://example.com/image.png',
      thumbnailUrl: 'https://example.com/image-thumbnail.png',
      filePost: {
        path: 'some/path/to/file',
        filename: 'testfile.png',
        base64: 'data:image/png;base64,...',
        contentType: 'image/png',
      },
      fileName: 'testfile.png',
      fileChat: {
        path: 'some/path/to/file/chat',
        filename: 'chatfile.png',
        base64: 'data:image/png;base64,...',
        contentType: 'image/png',
      },
    };

    // Lista de propiedades esperadas
    const expectedProperties = [
      'id',
      'type',
      'url',
      'thumbnailUrl',
      'filePost',
      'fileName',
      'fileChat',
    ];

    // Obtiene las propiedades del objeto de prueba
    const mediaProperties = Object.keys(testMedia);

    // Verifica que el número de propiedades coincida
    expect(mediaProperties.length).toBe(expectedProperties.length);

    // Verifica que todas las propiedades esperadas estén presentes
    expectedProperties.forEach(property => {
      expect(mediaProperties).toContain(property);
    });

    // Verifica adicionalmente que las propiedades de tipo compuesto como 'filePost' y 'fileChat'
    // cumplan con la estructura esperada de 'FilePostChat'
    expect(testMedia.filePost).toHaveProperty('path');
    expect(testMedia.filePost).toHaveProperty('filename');
    expect(testMedia.filePost).toHaveProperty('base64');
    expect(testMedia.filePost).toHaveProperty('contentType');
    expect(testMedia.fileChat).toHaveProperty('path');
    expect(testMedia.fileChat).toHaveProperty('filename');
    expect(testMedia.fileChat).toHaveProperty('base64');
    expect(testMedia.fileChat).toHaveProperty('contentType');
  });
});
