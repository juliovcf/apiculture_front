import { ResponseObject } from "../models/responseObject.model";

export default class Utils {

  static parseObjectData(responseObject: ResponseObject) {
    return responseObject.metadata.status == 200 ? responseObject.data as any : {};
  }

  static parseArrayData(responseObject: ResponseObject) {
    return responseObject.metadata.status == 200 ? responseObject.data as any[] : [];
  }

}
