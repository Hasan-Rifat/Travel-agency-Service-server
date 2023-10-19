import { User } from '@prisma/client';

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  data: User;
};
