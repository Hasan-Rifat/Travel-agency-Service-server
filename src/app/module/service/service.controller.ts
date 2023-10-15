import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import cloudinary from '../../../shared/cloudinary';
import { ServiceServices } from './service.services';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceServices.getAllFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'services fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceServices.getByIdFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'service fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  if (req.body.url) {
    // delete old image
    await cloudinary.uploader.destroy(req.body.public_id);

    const uploadResult = await cloudinary.uploader.upload(req.body.url, {
      folder: '/service',
    });
    req.body.url = uploadResult.secure_url;
    req.body.public_id = uploadResult.public_id;
  }
  const result = await ServiceServices.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'service updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceServices.deleteFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'service deleted successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  if (req.body.url) {
    const uploadResult = await cloudinary.uploader.upload(req.body.url, {
      folder: '/service',
    });
    req.body.url = uploadResult.secure_url;
    req.body.public_id = uploadResult.public_id;
  }
  const result = await ServiceServices.insertIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'service fetched successfully',
    data: result,
  });
});

export const ServiceController = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
};
