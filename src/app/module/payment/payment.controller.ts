import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PaymentService } from './payment.services';

const CreatePayment = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentService.CreatePayment(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment created successfully',
    clientSecret: result as string,
  });
});

export const PaymentController = {
  CreatePayment,
};
