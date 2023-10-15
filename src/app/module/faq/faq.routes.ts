import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FaqController } from './faq.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), FaqController.getAllFromDB);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), FaqController.insertIntoDB);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.getByIdFromDB);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.updateIntoDB);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.deleteFromDB);

export const FaqRouter = router;
