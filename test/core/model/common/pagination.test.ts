import { Pagination } from '../../../../src';

describe('Pagination Interface', () => {
  it('should have all required properties of the correct type', () => {
    // Crear un objeto de prueba que se ajuste a la interfaz Pagination
    const testPagination: Pagination = {
      page: 1,
      pageSize: 10,
      totalPages: 5,
      totalRegisters: 50,
    };

    // Verificar que el objeto de prueba tiene todas las propiedades requeridas
    expect(testPagination).toHaveProperty('page');
    expect(testPagination).toHaveProperty('pageSize');
    expect(testPagination).toHaveProperty('totalPages');
    expect(testPagination).toHaveProperty('totalRegisters');

    // Verificar los tipos de las propiedades
    expect(typeof testPagination.page).toBe('number');
    expect(typeof testPagination.pageSize).toBe('number');
    expect(typeof testPagination.totalPages).toBe('number');
    expect(typeof testPagination.totalRegisters).toBe('number');
  });

  // Aquí puedes añadir más pruebas para casos específicos si es necesario
});
