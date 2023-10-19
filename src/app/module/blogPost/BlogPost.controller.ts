import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogPostServices } from './BlogPost.services';
import cloudinary from '../../../shared/cloudinary';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogPostServices.getAllFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog Posts fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogPostServices.getByIdFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog Post fetched successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogPostServices.deleteFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog Post deleted successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  if (req.body.url) {
    const uploadResult = await cloudinary.uploader.upload(req.body.url, {
      folder: '/blog',
    });
    req.body.url = uploadResult.secure_url;
    req.body.public_id = uploadResult.public_id;
  }

  const result = await BlogPostServices.insertIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog Post fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  if (req.body.url) {
    // delete old image
    // await cloudinary.uploader.destroy(req.body.public_id);

    const uploadResult = await cloudinary.uploader.upload(req.body.url, {
      folder: '/blog',
    });
    req.body.url = uploadResult.secure_url;
    req.body.public_id = uploadResult.public_id;
  }

  // const result = await BlogPostServices.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Blog Post updated successfully',
    data: req.body,
  });
});

export const BlogPostController = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
};
