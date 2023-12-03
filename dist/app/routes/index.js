"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../module/auth/auth.routes");
const profile_routes_1 = require("../module/profile/profile.routes");
const user_routes_1 = require("../module/user/user.routes");
const service_routes_1 = require("../module/service/service.routes");
const category_routes_1 = require("../module/category/category.routes");
const booking_routes_1 = require("../module/booking/booking.routes");
const review_routes_1 = require("../module/review/review.routes");
const BlogPost_routes_1 = require("../module/blogPost/BlogPost.routes");
const faq_routes_1 = require("../module/faq/faq.routes");
const notification_routes_1 = require("../module/notification/notification.routes");
const payment_routes_1 = require("../module/payment/payment.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ...
    {
        path: '/profile',
        route: profile_routes_1.ProfileRouter,
    },
    {
        path: '/users',
        route: user_routes_1.UserRouter,
    },
    {
        path: '/auth',
        route: auth_routes_1.AuthRouter,
    },
    {
        path: '/service',
        route: service_routes_1.ServiceRouter,
    },
    {
        path: '/category',
        route: category_routes_1.CategoryRouter,
    },
    {
        path: '/booking',
        route: booking_routes_1.BookingRouter,
    },
    {
        path: '/review',
        route: review_routes_1.ReviewRouter,
    },
    {
        path: '/blog-post',
        route: BlogPost_routes_1.BlogPostRouter,
    },
    {
        path: '/faq',
        route: faq_routes_1.FaqRouter,
    },
    {
        path: '/payment',
        route: payment_routes_1.PaymentRouter,
    },
    {
        path: '/notification',
        route: notification_routes_1.NotificationRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
