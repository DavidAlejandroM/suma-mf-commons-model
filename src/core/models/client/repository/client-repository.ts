import { Response } from '../../common/response';
import { Client } from '../client';

export interface ClientRepository {
  get(): Promise<Response<Client>>;
}
