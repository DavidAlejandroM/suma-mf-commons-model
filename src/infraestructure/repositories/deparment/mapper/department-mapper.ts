import { Mapper } from '../../../../base';
import { Client } from '../../../../core/models';
import { ClientData } from '../../client/entity/client-data';

export class DepartmentMapper implements Mapper<Client, ClientData> {
  mapFrom(param: Client): ClientData {
    return {
      id: param.id,
      name: param.name,
      document: param.document,
      typeDocument: param.typeDocument,
      departments: param.departments,
      creationUserId: param.creationUserId,
      creationDate: param.creationDate,
      countryId: param.countryId,
      stateId: param.stateId,
      cityId: param.cityId,
      address: param.address,
      modificationUserId: param.modificationUserId,
      modificationUser: param.modificationUser,
      modificationDate: param.modificationDate,
      logoBase64: param.logoBase64,
      webPatch: param.webPatch,
      businessSector: param.businessSector,
      idDepartment: param.idDepartment,
      newClient: param.newClient,
    };
  }
  mapTo(param: ClientData): Client {
    return {
      id: param.id,
      name: param.name,
      document: param.document,
      typeDocument: param.typeDocument,
      departments: param.departments,
      creationUserId: param.creationUserId,
      creationDate: param.creationDate,
      countryId: param.countryId,
      stateId: param.stateId,
      cityId: param.cityId,
      address: param.address,
      modificationUserId: param.modificationUserId,
      modificationUser: param.modificationUser,
      modificationDate: param.modificationDate,
      logoBase64: param.logoBase64,
      webPatch: param.webPatch,
      businessSector: param.businessSector,
      idDepartment: param.idDepartment,
      newClient: param.newClient,
    };
  }
}
