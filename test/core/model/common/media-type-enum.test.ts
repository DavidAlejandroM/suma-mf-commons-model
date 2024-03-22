import { MediaType } from '../../../../src';

describe('MediaType Enum', () => {
  it('should have the correct values and only those values', () => {
    // Define los valores esperados del enum MediaType
    const expectedValues = {
      IMAGE: 'IMAGE',
      VIDEO: 'VIDEO',
      AUDIO: 'AUDIO',
      UNKNOWN: 'UNKNOWN',
      DOCUMENT: 'DOCUMENT',
    };

    // Compara el enum MediaType completo con los valores esperados
    expect(MediaType).toEqual(expectedValues);

    // Adicionalmente, verifica el número de claves para asegurarse de que no hay valores extra
    expect(Object.keys(MediaType).length).toEqual(
      Object.keys(expectedValues).length
    );
  });
});
