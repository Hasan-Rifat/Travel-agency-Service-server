import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FaqController } from './faq.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FaqValidation } from './faq.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  FaqController.getAllFromDB
);
router.post(
  '/',
  validateRequest(FaqValidation.faqCreateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  FaqController.insertIntoDB
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  FaqController.getByIdFromDB
);
router.patch(
  '/:id',
  validateRequest(FaqValidation.faqUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  FaqController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin),
  FaqController.deleteFromDB
);

export const FaqRouter = router;
