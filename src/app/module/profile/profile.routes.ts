import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from '../user/user.controller';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  UserController.getProfile
);

export const ProfileRouter = router;
