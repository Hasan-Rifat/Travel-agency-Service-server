"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRouter = void 0;
const express_1 = __importDefault(require("express"));
/* import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth'; */
const payment_controller_1 = require("./payment.controller");
const router = express_1.default.Router();
router.post('/create-payment', 
//   validateRequest(),
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SupperAdmin, ENUM_USER_ROLE.USER),
payment_controller_1.PaymentController.CreatePayment);
exports.PaymentRouter = router;
