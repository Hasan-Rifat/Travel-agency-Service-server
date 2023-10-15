import { Notification } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async (): Promise<Notification[]> => {
  const result = await prisma.notification.findMany();

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Notification not found');
  }

  return result;
};

const getByIdFromDB = async (id: string): Promise<Notification | null> => {
  const result = await prisma.notification.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Notification not found');
  }

  return result;
};

const updateIntoDB = async (
  id: string,
  notification: Notification
): Promise<Notification> => {
  const result = await prisma.notification.update({
    where: {
      id: id,
    },
    data: notification,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Notification not found');
  }

  return result;
};

const deleteFromDB = async (id: string): Promise<Notification> => {
  const result = await prisma.notification.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Notification not found');
  }

  return result;
};

export const NotificationServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
