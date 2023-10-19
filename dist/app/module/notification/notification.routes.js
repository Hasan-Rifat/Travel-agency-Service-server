"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const notification_controller_1 = require("./notification.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const notificaiton_validation_1 = require("./notificaiton.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), notification_controller_1.NotificationController.getAllFromDB);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), notification_controller_1.NotificationController.getByIdFromDB);
router.patch('/:id', (0, validateRequest_1.default)(notificaiton_validation_1.NotificationValidation.notificationUpdateSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), notification_controller_1.NotificationController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), notification_controller_1.NotificationController.deleteFromDB);
exports.NotificationRouter = router;
