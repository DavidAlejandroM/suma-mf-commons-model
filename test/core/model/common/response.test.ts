import { Response } from '../../../../src';
// Suponiendo que `User` es un tipo que podrías querer usar con `Response<T>`
interface User {
  id: string;
  name: string;
}

describe('Response<T> Interface', () => {
  // Caso básico con un tipo simple para T
  it('should support simple data types in the data array', () => {
    const testResponseString: Response<string> = {
      pagination: { page: 1, pageSize: 5, totalPages: 10, totalRegisters: 50 },
      data: ['item1', 'item2'],
      success: true,
      errors: null,
    };

    expect(testResponseString.data).toContain('item1');
    expect(testResponseString.data.length).toBe(2);
    expect(testResponseString.success).toBe(true);
  });

  // Caso con un tipo complejo/objeto para T
  it('should support complex object types in the data array', () => {
    const testResponseUser: Response<User> = {
      pagination: { page: 1, pageSize: 5, totalPages: 2, totalRegisters: 10 },
      data: [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Doe' },
      ],
      success: true,
      errors: null,
    };

    expect(testResponseUser.data[0].id).toBe('1');
    expect(testResponseUser.data[0].name).toBe('John Doe');
    expect(testResponseUser.data.length).toBe(2);
    expect(testResponseUser.success).toBe(true);
  });

  // Verificación de la propiedad errors
  it('should correctly handle errors', () => {
    const testResponseError: Response<null> = {
      pagination: { page: 0, pageSize: 0, totalPages: 0, totalRegisters: 0 },
      data: [],
      success: false,
      errors: { message: 'An error occurred' },
    };

    expect(testResponseError.errors).not.toBeNull();
    expect(testResponseError.errors.message).toBe('An error occurred');
    expect(testResponseError.success).toBe(false);
  });

  // Verificar el manejo de la paginación
  it('should properly handle pagination details', () => {
    const testResponsePagination: Response<number> = {
      pagination: { page: 2, pageSize: 5, totalPages: 4, totalRegisters: 20 },
      data: [1, 2, 3, 4, 5],
      success: true,
      errors: null,
    };

    expect(testResponsePagination.pagination.page).toBe(2);
    expect(testResponsePagination.pagination.pageSize).toBe(5);
    expect(testResponsePagination.pagination.totalPages).toBe(4);
    expect(testResponsePagination.pagination.totalRegisters).toBe(20);
    expect(testResponsePagination.data.length).toBe(5);
  });

  // Aquí puedes añadir más casos de prueba según sea necesario
});
