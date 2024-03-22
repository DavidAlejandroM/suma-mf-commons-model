import { Message } from '../../../../src';

describe('Message Interface', () => {
  it('should have all required properties of the correct type', () => {
    // Crear un objeto de prueba que se ajuste a la interfaz Message
    const testMessage: Message = {
      data: {}, // Puedes cambiar esto para probar diferentes tipos de datos
      content: 'This is a test message',
    };

    // Verificar que el objeto de prueba tiene todas las propiedades requeridas
    expect(testMessage).toHaveProperty('data');
    expect(testMessage).toHaveProperty('content');

    // Verificar los tipos de las propiedades si es necesario
    // Nota: Esta verificación es superficial y se basa en los tipos de datos en tiempo de ejecución
    expect(typeof testMessage.content).toBe('string');
    // La verificación de 'data' como 'any' no es necesaria ya que 'any' acepta cualquier tipo
  });

  // Aquí puedes añadir más pruebas para casos específicos si es necesario
});
