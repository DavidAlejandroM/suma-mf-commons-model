import { Client } from '../client/client';
import { User } from '../user/user';

export interface ResponseToken {
  token: string;
  idCurrentClient: string;
  idCurrentDepartment: string;
  roles: string[];
  user: User;
  client: Client;
  clients: Client[];
  temporalPassword: boolean;
  activeRole: string;
}
