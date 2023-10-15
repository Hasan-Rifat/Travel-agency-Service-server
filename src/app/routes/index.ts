import express from 'express';
import { AuthRouter } from '../module/auth/auth.routes';
import { ProfileRouter } from '../module/profile/profile.routes';
import { UserRouter } from '../module/user/user.routes';
import { ServiceRouter } from '../module/service/service.routes';
import { CategoryRouter } from '../module/category/category.routes';
import { BookingRouter } from '../module/booking/booking.routes';
import { ReviewRouter } from '../module/review/review.routes';
import { BlogPostRouter } from '../module/blogPost/BlogPost.routes';
import { FaqRouter } from '../module/faq/faq.routes';
import { NotificationRouter } from '../module/notification/notification.routes';

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
  {
    path: '/service',
    route: ServiceRouter,
  },
  {
    path: '/category',
    route: CategoryRouter,
  },
  {
    path: '/booking',
    route: BookingRouter,
  },
  {
    path: '/review',
    route: ReviewRouter,
  },
  {
    path: '/blog-post',
    route: BlogPostRouter,
  },
  {
    path: '/faq',
    route: FaqRouter,
  },
  {
    path: '/notification',
    route: NotificationRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
