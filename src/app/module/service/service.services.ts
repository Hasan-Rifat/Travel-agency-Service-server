import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';
import { Service } from '@prisma/client';

const getAllFromDB = async (): Promise<Service[]> => {
  const result = await prisma.service.findMany({
    include: {
      bookings: true,
      category: true,
      reviews: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return result;
};

const getByIdFromDB = async (id: string): Promise<Service | null> => {
  const result = await prisma.service.findUnique({
    where: {
      id: id,
    },
    include: {
      bookings: true,
      category: true,
      reviews: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return result;
};

const updateIntoDB = async (id: string, service: Service): Promise<Service> => {
  const result = await prisma.service.update({
    where: {
      id: id,
    },
    include: {
      bookings: true,
      category: true,
      reviews: true,
    },
    data: service,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return result;
};

const deleteFromDB = async (id: string): Promise<Service> => {
  const result = await prisma.service.delete({
    where: {
      id: id,
    },
    include: {
      bookings: true,
      category: true,
      reviews: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return result;
};

const insertIntoDB = async (data: Service): Promise<Service | null> => {
  const result = await prisma.service.create({
    data,
    include: {
      bookings: true,
      category: true,
      reviews: true,
    },
  });

  return result;
};

export const ServiceServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
};
