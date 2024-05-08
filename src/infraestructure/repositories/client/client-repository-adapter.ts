import { Config } from '../../../base/config';
import { Client, Response } from '../../../core/models';
import { ClientRepository } from '../../../core/models/client/repository/client-repository';
import { ClientData } from './entity/client-data';

export class ClientRepositoryAdapter implements ClientRepository {
  API_URL: string;

  constructor() {
    this.API_URL = new Config().getApiUrl() + 'api/v1/clients';
  }

  async get(): Promise<Response<ClientData>> {
    const url = `${this.API_URL}`;
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
}
