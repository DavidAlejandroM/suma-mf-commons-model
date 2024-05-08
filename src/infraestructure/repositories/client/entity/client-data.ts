import { DepartmentData } from '../../deparment/entity/department-data';

export interface ClientData {
  id?: string;
  name: string;
  document: string;
  typeDocument: string;
  departments?: Array<DepartmentData>;
  creationUserId?: string;
  creationDate?: string;
  countryId?: number;
  stateId?: number;
  cityId?: number;
  address?: string;
  modificationUserId?: string;
  modificationUser?: string;
  modificationDate?: string;
  logoBase64?: string;
  webPatch: string;
  businessSector: string;
  idDepartment?: string;
  newClient?: string;
}
