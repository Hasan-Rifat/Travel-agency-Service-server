import express from 'express';
import { AuthRouter } from '../module/auth/auth.routes';
import { ProfileRouter } from '../module/profile/profile.routes';
import { UserRouter } from '../module/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ...
  {
    path: '/profile',
    route: ProfileRouter,
  },
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
