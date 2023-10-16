import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), CategoryController.getAllFromDB);
router.post(
  '/',
  validateRequest(CategoryValidation.categoryCreateSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.insertIntoDB
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.getByIdFromDB
);
router.patch(
  '/:id',
  validateRequest(CategoryValidation.categoryUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteFromDB
);

export const CategoryRouter = router;
