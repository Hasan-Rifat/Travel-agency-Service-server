import { BlogPost } from '@prisma/client';
import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async (): Promise<BlogPost[]> => {
  const result = await prisma.blogPost.findMany();

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog Post not found');
  }

  return result;
};

const getByIdFromDB = async (id: string): Promise<BlogPost | null> => {
  const result = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog Post not found');
  }

  return result;
};

const updateIntoDB = async (
  id: string,
  blogPost: BlogPost
): Promise<BlogPost> => {
  const result = await prisma.blogPost.update({
    where: {
      id: id,
    },
    data: blogPost,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog Post not found');
  }

  return result;
};

const deleteFromDB = async (id: string): Promise<BlogPost> => {
  const result = await prisma.blogPost.delete({
    where: {
      id: id,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog Post not found');
  }

  return result;
};

const insertIntoDB = async (data: BlogPost): Promise<BlogPost | null> => {
  const result = await prisma.blogPost.create({
    data,
  });
  return result;
};

export const BlogPostServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
};
