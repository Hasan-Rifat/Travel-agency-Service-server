import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();
router.post(
  '/login',
  validateRequest(AuthValidation.loginSchema),
  AuthController.loginUser
);
router.post(
  '/register',
  validateRequest(AuthValidation.registerSchema),
  AuthController.insertIntoDB
);
router.get('/refresh-token', AuthController.refreshAccessToken);

export const AuthRouter = router;
