import { User } from "@prisma/client";

// import prisma from "../configs/prisma.config";
import UserModel from "../models/user.model";

export const findUserById = (id: string) => {
  return UserModel.findById(id);
  // return prisma.user.findUnique({ where: { id } });
};

export const findUserByEmail = (email: string) => {
  return UserModel.findOne({ email }).exec();
  // return prisma.user.findUnique({ where: { email } });
};

export const createUser = async (userData: IUser) => {
  const user = new UserModel(userData);
  return await user.save();
  // return prisma.user.create({ data: user });
};
