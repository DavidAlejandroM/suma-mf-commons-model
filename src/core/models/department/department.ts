export interface Department {
  id?: string;
  name: string;
  description?: string;
  idClient?: string;
  isRoot?: boolean;
  creationUserId?: number;
  creationDate?: string;
  modificationUserId?: number;
  modificationDate?: string;
  clientName?: any;
  enable?: boolean;
  newDepartment?: boolean;
}
