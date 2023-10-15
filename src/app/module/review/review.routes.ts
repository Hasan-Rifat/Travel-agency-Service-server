import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ReviewController } from './review.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), ReviewController.getAllFromDB);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), ReviewController.insertIntoDB);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), ReviewController.getByIdFromDB);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), ReviewController.updateIntoDB);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewController.deleteFromDB
);
router.post(
  '/replay/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewController.replayReview
);

export const ReviewRouter = router;
