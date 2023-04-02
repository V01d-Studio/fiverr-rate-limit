import RequestModel from "../models/request.model";
import RoleModel from "../models/role.model";

export const fetchCodeByPosition = (posititon: string) => {
  return RequestModel.findOne({ request: posititon }).exec();
};

export const fetchJobByCode = (code: number) => {
  return RoleModel.findOne({ code }).exec();
};
