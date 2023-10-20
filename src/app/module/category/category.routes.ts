import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  CategoryController.getAllFromDB
);
router.post(
  '/',
  validateRequest(CategoryValidation.categoryCreateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  CategoryController.insertIntoDB
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  CategoryController.getByIdFromDB
);
router.patch(
  '/:id',
  validateRequest(CategoryValidation.categoryUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  CategoryController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  CategoryController.deleteFromDB
);

export const CategoryRouter = router;
