import {AddUseCase} from '../../../../src/core/use-case/test/add-usecase'

describe('AddUseCase', () => {
  it('debería sumar dos números y devolver el resultado', async () => {
    const addUseCase = new AddUseCase();

    // Aquí llamamos al método execute con dos números para sumar
    const result = await addUseCase.execute({ a: 1, b: 2 });

    // Verificamos que el resultado sea la suma de los dos números
    expect(result).toBe(3);
  });

  it('debería manejar números negativos correctamente', async () => {
    const addUseCase = new AddUseCase();
    const result = await addUseCase.execute({ a: -1, b: 2 });
    expect(result).toBe(1);
  });

  // Puedes agregar más casos de prueba según sea necesario...
});