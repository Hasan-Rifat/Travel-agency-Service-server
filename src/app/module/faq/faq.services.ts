import { Faq } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async (): Promise<Faq[]> => {
  const result = await prisma.faq.findMany();

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Faq not found');
  }

  return result;
};

const getByIdFromDB = async (id: string): Promise<Faq | null> => {
  const result = await prisma.faq.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Faq not found');
  }

  return result;
};

const updateIntoDB = async (id: string, faq: Faq): Promise<Faq> => {
  const result = await prisma.faq.update({
    where: {
      id: id,
    },
    data: faq,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Faq not found');
  }

  return result;
};

const deleteFromDB = async (id: string): Promise<Faq> => {
  const result = await prisma.faq.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Faq not found');
  }

  return result;
};

const insertIntoDB = async (data: Faq): Promise<Faq | null> => {
  const result = await prisma.faq.create({
    data,
  });
  return result;
};

export const FaqServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
};
