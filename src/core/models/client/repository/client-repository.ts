import { Client } from '../client';

export interface ClientRepository {
  get(): Promise<Client>;
}
