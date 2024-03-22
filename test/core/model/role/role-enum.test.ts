import { RoleEnum } from '../../../../src';

describe('RoleEnum', () => {
  // Verificar que todos los valores esperados estén presentes
  it('should have all the expected roles', () => {
    const expectedRoles = {
      ROLE_USER: 'ROLE_USER',
      ROLE_ADMIN: 'ROLE_ADMIN',
    };

    // Comprobar que RoleEnum tiene los valores correctos
    expect(RoleEnum.ROLE_USER).toBe(expectedRoles.ROLE_USER);
    expect(RoleEnum.ROLE_ADMIN).toBe(expectedRoles.ROLE_ADMIN);
  });

  // Verificar que no haya valores adicionales inesperados
  it('should not have unexpected roles', () => {
    const roleKeys = Object.keys(RoleEnum);
    expect(roleKeys.length).toBe(2); // Asegurarse de que solo hay 2 roles definidos
  });

  // Verificar el uso del enum en un contexto típico
  it('should be usable in typical enum scenarios', () => {
    // Ejemplo: asignar un rol a un usuario
    const userRole: RoleEnum = RoleEnum.ROLE_USER;
    const adminRole: RoleEnum = RoleEnum.ROLE_ADMIN;

    // Asegurar que los roles asignados sean correctos
    expect(userRole).toBe('ROLE_USER');
    expect(adminRole).toBe('ROLE_ADMIN');

    // Ejemplo: usar RoleEnum en una estructura condicional
    let accessLevel = '';
    if (userRole === RoleEnum.ROLE_USER) {
      accessLevel = 'user';
    } else if (adminRole === RoleEnum.ROLE_ADMIN) {
      accessLevel = 'admin';
    }

    expect(accessLevel).toBe('user'); // Este caso debería coincidir con el primer condicional
  });
});
