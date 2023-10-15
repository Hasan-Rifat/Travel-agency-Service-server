import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ServiceController } from './service.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), ServiceController.getAllFromDB);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), ServiceController.insertIntoDB);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), ServiceController.getByIdFromDB);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.deleteFromDB
);

export const ServiceRouter = router;
