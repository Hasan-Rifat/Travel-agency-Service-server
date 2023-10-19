import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { prisma } from '../../../shared/prisma';
import { ILoginUserResponse } from './auth.interface';

const insertIntoDB = async (data: User): Promise<User> => {
  data.password = bcrypt.hashSync(data.password, 12);
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const loginUser = async (user: User): Promise<ILoginUserResponse> => {
  const result = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const userExist = await bcrypt.compare(user.password, result.password);

  if (!userExist) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }

  // create access token and refresh token
  const { id: userId, role } = result;

  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.refresh_expires_in as string
  );
  const data = result;

  return { accessToken, refreshToken, data };
};
const refreshAccessToken = async (
  token: string
): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  const user = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

  if (!user) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid token');
  }

  const accessToken = jwtHelpers.createToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // create refresh token
  const refreshToken = jwtHelpers.createToken(
    { id: user._id, role: user.role, email: user.email },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  insertIntoDB,
  loginUser,
  refreshAccessToken,
};
