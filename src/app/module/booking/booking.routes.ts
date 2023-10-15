import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookingController } from './booking.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), BookingController.getAllFromDB);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), BookingController.insertIntoDB);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), BookingController.getByIdFromDB);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookingController.updateIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookingController.deleteFromDB
);
router.patch(
  '/:id/cancel',
  auth(ENUM_USER_ROLE.ADMIN),
  BookingController.cancelBooking
);

export const BookingRouter = router;
