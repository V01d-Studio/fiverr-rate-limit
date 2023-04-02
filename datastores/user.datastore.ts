import UserModel from "../models/user.model";
import RoleModel from "../models/role.model";
import RequestModel from "../models/request.model";

export const findUserById = (id: string) => {
  return UserModel.findById(id);
};

export const findUserByEmail = (email: string) => {
  return UserModel.findOne({ email }).exec();
};

export const createUser = async (userData: IUser) => {
  const user = new UserModel(userData);
  return await user.save();
};

export const viewUser = async (id: string) => {
  const user = await UserModel.findById(id).select(
    "name requestCode roleCode email"
  );

  if (!user) {
    return null;
  }

  const roles = await RoleModel.find().exec();
  const requests = await RequestModel.find().exec();

  const result: { [k: string]: any } = {
    name: user.name,
    email: user.email,
  };

  roles.forEach((role) => {
    if (role.code === user.roleCode) {
      result.role = {
        code: role.code,
        seniority: role.seniority,
        function: role.function,
      };
    }
  });

  requests.forEach((request) => {
    if (request.code === user.requestCode) {
      result.reequest = {
        code: request.code,
        position: request.request,
      };
    }
  });

  return result;
};
