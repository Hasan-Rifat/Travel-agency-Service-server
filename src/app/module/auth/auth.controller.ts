import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.services';
import cloudinary from '../../../shared/cloudinary';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  if (req.body.url) {
    const uploadResult = await cloudinary.uploader.upload(req.body.url, {
      folder: '/avatar',
    });
    req.body.url = uploadResult.secure_url;
    req.body.public_id = uploadResult.public_id;
  }
  const result = await AuthService.insertIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User created successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);

  const { refreshToken, accessToken: token } = result;

  // set refresh token into cookie

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);
  console.log(token);
  sendResponse<{
    token: string;
  }>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User signin successfully!"',
    token,
  });
});

export const AuthController = {
  insertIntoDB,
  loginUser,
};
