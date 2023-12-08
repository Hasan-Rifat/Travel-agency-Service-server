import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getByIdFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return result;
};

const updateIntoDB = async (id: string, user: User): Promise<User> => {
  user.password = bcrypt.hashSync(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: user,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return result;
};

const getProfile = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const userServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getProfile,
};
