"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const faq_controller_1 = require("./faq.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const faq_validation_1 = require("./faq.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), faq_controller_1.FaqController.getAllFromDB);
router.post('/', (0, validateRequest_1.default)(faq_validation_1.FaqValidation.faqCreateSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), faq_controller_1.FaqController.insertIntoDB);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), faq_controller_1.FaqController.getByIdFromDB);
router.patch('/:id', (0, validateRequest_1.default)(faq_validation_1.FaqValidation.faqUpdateSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), faq_controller_1.FaqController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), faq_controller_1.FaqController.deleteFromDB);
exports.FaqRouter = router;
