import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { bookingServices } from './booking.services';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.getAllFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'booking data fetched successfully',
    data: result,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.getByIdFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'booking fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'booking updated successfully',
    data: result,
  });
});

const cancelBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.updateIntoDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'cancel booking successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.deleteFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'booking deleted successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.insertIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'booking fetched successfully',
    data: result,
  });
});

export const BookingController = {
  getAllFromDB,
  getByIdFromDB,
  cancelBooking,
  updateIntoDB,
  deleteFromDB,
  insertIntoDB,
};
