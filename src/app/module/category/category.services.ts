import { Category } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  return result;
};

const getByIdFromDB = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  return result;
};

const updateIntoDB = async (
  id: string,
  category: Category
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data: category,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  return result;
};

const deleteFromDB = async (id: string): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  return result;
};

const insertIntoDB = async (data: Category): Promise<Category | null> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

export const CategoryServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
};
