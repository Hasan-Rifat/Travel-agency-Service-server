import { Booking } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async (): Promise<Booking[]> => {
  const result = await prisma.booking.findMany();

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'booking not found');
  }

  return result;
};

const getByIdFromDB = async (id: string): Promise<Booking | null> => {
  const result = await prisma.booking.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'booking not found');
  }

  return result;
};

const updateIntoDB = async (
  id: string,
  data: Booking
): Promise<{
  booking: Booking;
}> => {
  // return result;

  const user = await prisma.user.findUnique({
    where: {
      id: data.userId,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }

  const result = await prisma.$transaction(async transactionClient => {
    // create a booking
    const booking = await transactionClient.booking.update({
      where: {
        id: id,
      },
      data,
    });

    await transactionClient.notification.create({
      data: {
        userId: user.id,
        message: 'order confirmed successfully',
        role: user.role,
        read: false,
      },
    });

    return {
      booking,
    };
  });

  // create notification

  return result;
};

const cancelBooking = async (
  id: string,
  booking: Booking
): Promise<Booking> => {
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data: {
      ...booking,
      status: 'cancel',
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'booking not found');
  }

  return result;
};

const deleteFromDB = async (id: string): Promise<Booking> => {
  const result = await prisma.booking.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'booking not found');
  }

  return result;
};

const insertIntoDB = async (
  data: Booking
): Promise<{
  booking: Booking;
}> => {
  const user = await prisma.user.findUnique({
    where: {
      id: data.userId,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }

  const result = await prisma.$transaction(async transactionClient => {
    // create a booking
    const booking = await transactionClient.booking.create({
      data,
    });

    await transactionClient.notification.create({
      data: {
        userId: user.id,
        message: 'You have a new booking',
        role: user.role,
        read: false,
      },
    });

    return {
      booking,
    };
  });

  // create notification

  return result;
};

export const bookingServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
  cancelBooking,
};
