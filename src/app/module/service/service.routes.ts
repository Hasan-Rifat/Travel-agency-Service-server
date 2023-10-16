import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './service.validation';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), ServiceController.getAllFromDB);
router.post(
  '/',
  validateRequest(ServiceValidation.serviceCreateSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.insertIntoDB
);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), ServiceController.getByIdFromDB);
router.patch(
  '/:id',
  validateRequest(ServiceValidation.serviceUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.deleteFromDB
);

export const ServiceRouter = router;
