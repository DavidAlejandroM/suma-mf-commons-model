import { Department } from '../index';

export interface Client {
  id?: string;
  name: string;
  document: string;
  typeDocument: string;
  departments?: Array<Department>;
  creationUserId?: string;
  creationDate?: string;
  countryId?: number;
  stateId?: number;
  cityId?: number;
  address?: string;
  modificationUserId?: string;
  modificationDate?: string;
  logoBase64?: string;
  webPatch: string;
  businessSector: string;
  idDepartment?: string;
}
