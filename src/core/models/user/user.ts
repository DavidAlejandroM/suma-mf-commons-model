import { RoleEnum } from '../role/role-enum';

export interface User {
  id: string;
  document: string;
  typeDocument: string;
  enable: boolean;
  isTemporalPassword: boolean;
  token: string;
  names: string;
  lastNames: string;
  customer: string;
  phone: string;
  role: string[];
  email: string;
  creationUserId: string;
  creationDate: string;
  modificationUser: string;
  modificationDate: string;
  modificationUserId: string;
  newUser: boolean;
  enabled?: boolean;
  roleEnums: RoleEnum[];
  emails: string[];
  documentId: string;
  typeDocumentId: string;
  profilePhotoPath: string;
  profilePhotoBase64: string;
}
