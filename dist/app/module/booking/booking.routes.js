"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const booking_controller_1 = require("./booking.controller");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.getAllFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.insertIntoDB);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.getByIdFromDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.deleteFromDB);
router.patch('/:id/cancel', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.cancelBooking);
exports.BookingRouter = router;
