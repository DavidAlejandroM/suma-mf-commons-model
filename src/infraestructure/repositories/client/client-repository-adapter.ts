import { Client } from '../../../core/models';
import { ClientRepository } from '../../../core/models/client/repository/client-repository';

export class ClientRepositoryAdapter implements ClientRepository {
  async get(): Promise<Client> {
    const client: Client = {
      id: '1',
      name: 'Nombre del cliente',
      document: '',
      typeDocument: '',
      webPatch: '',
      businessSector: '',
    };
    return client;
  }
}
