import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../shared/prisma';
import { Prisma, Service } from '@prisma/client';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IServiceFilterRequest } from './service.interface';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import {
  ServiceFilterableFields,
  ServiceRelationalFields,
  ServiceRelationalFieldsMapper,
} from './service.constants';
import { IGenericResponse } from '../../../interfaces/common';

const getAllFromDB = async (
  filters: IServiceFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Service[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: ServiceFilterableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (ServiceRelationalFields.includes(key)) {
          return {
            [ServiceRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.ServiceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.service.findMany({
    include: {
      bookings: true,
      category: true,
      reviews: true,
    },

    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? [{ [options.sortBy]: options.sortOrder }]
        : [{ createdAt: 'desc' }],
  });

  const total = await prisma.service.count({
    where: whereConditions,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
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
