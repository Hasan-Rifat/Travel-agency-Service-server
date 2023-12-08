import { Review, ReviewReply } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async (): Promise<Review[]> => {
  const result = await prisma.review.findMany({
    include: {
      ReviewReply: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }

  return result;
};

const getByIdFromDB = async (id: string): Promise<Review | null> => {
  const result = await prisma.review.findUnique({
    where: {
      id: id,
    },
    include: {
      ReviewReply: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }

  return result;
};

const updateIntoDB = async (id: string, review: Review): Promise<Review> => {
  const result = await prisma.review.update({
    where: {
      id: id,
    },
    data: review,
    include: {
      ReviewReply: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }

  return result;
};

const deleteFromDB = async (id: string): Promise<Review> => {
  const result = await prisma.review.delete({
    where: {
      id: id,
    },
    include: {
      ReviewReply: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }

  return result;
};

const insertIntoDB = async (data: Review): Promise<Review | null> => {
  //  check user exist
  const userExist = await prisma.user.findFirst({
    where: {
      id: data.userId,
    },
  });

  if (!userExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // check user book or not
  const bookExist = await prisma.booking.findMany({
    where: {
      serviceId: data.serviceId,
      userId: data.userId,
    },
  });

  if (!bookExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Booking not found');
  }

  // check user review or not in this service
  const reviewExist = await prisma.review.findMany({
    where: {
      serviceId: data.serviceId,
      userId: data.userId,
    },
  });

  // if added then don't add
  if (reviewExist.length > 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'you already review submit');
  }

  // if not added then add
  const result = await prisma.review.create({
    data,
    include: {
      ReviewReply: true,
    },
  });
  return result;
};

const replayReview = async (
  id: string,
  review: ReviewReply
): Promise<ReviewReply> => {
  const result = await prisma.review.findUnique({
    where: {
      id: id,
    },
    include: {
      ReviewReply: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }

  const replayReview = await prisma.reviewReply.create({
    data: {
      ...review,
      reviewId: result.id,
    },
    include: {
      review: true,
    },
  });

  if (!replayReview) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }

  return replayReview;
};

export const ReviewServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
  replayReview,
};
