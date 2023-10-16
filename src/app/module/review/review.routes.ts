import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ReviewController } from './review.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidation } from './review.validation';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), ReviewController.getAllFromDB);
router.post(
  '/',
  validateRequest(ReviewValidation.reviewCreateSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewController.insertIntoDB
);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), ReviewController.getByIdFromDB);
router.patch(
  '/:id',
  validateRequest(ReviewValidation.reviewUpdateSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewController.deleteFromDB
);
router.post(
  '/replay/:id',
  validateRequest(ReviewValidation.reviewReplaySchema),
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewController.replayReview
);

export const ReviewRouter = router;
