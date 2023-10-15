import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BlogPostController } from './BlogPost.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), BlogPostController.getAllFromDB);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), BlogPostController.insertIntoDB);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BlogPostController.getByIdFromDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BlogPostController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BlogPostController.deleteFromDB
);

export const BlogPostRouter = router;
