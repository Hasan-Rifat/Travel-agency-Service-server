"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.loginSchema), auth_controller_1.AuthController.loginUser);
router.post('/register', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.registerSchema), auth_controller_1.AuthController.insertIntoDB);
router.get('/refresh-token', auth_controller_1.AuthController.refreshAccessToken);
exports.AuthRouter = router;
