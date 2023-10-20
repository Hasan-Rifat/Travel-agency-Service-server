import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookingController } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidation } from './booking.validation';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  BookingController.getAllFromDB
);
router.post(
  '/',
  validateRequest(BookingValidation.bookingCreateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  BookingController.insertIntoDB
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  BookingController.getByIdFromDB
);
router.patch(
  '/:id',
  validateRequest(BookingValidation.bookingUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  BookingController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  BookingController.deleteFromDB
);
router.patch(
  '/:id/cancel',
  validateRequest(BookingValidation.bookingUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  BookingController.cancelBooking
);

export const BookingRouter = router;
