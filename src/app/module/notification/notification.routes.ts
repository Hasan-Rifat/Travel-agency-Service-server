import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { NotificationController } from './notification.controller';
import validateRequest from '../../middlewares/validateRequest';
import { NotificationValidation } from './notificaiton.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  NotificationController.getAllFromDB
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  NotificationController.getByIdFromDB
);
router.patch(
  '/:id',
  validateRequest(NotificationValidation.notificationUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  NotificationController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  NotificationController.deleteFromDB
);

export const NotificationRouter = router;