import express from 'express';
/* import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth'; */
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post(
  '/create-payment',
  //   validateRequest(),
  //   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
  PaymentController.CreatePayment
);

export const PaymentRouter = router;
