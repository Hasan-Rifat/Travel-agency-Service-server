import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  UserController.getAllFromDB
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  UserController.getByIdFromDB
);
router.patch(
  '/:id',
  validateRequest(UserValidation.userUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  UserController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  UserController.deleteFromDB
);

export const UserRouter = router;
