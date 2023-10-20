"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const service_controller_1 = require("./service.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin, user_1.ENUM_USER_ROLE.USER), service_controller_1.ServiceController.getAllFromDB);
router.post('/', (0, validateRequest_1.default)(service_validation_1.ServiceValidation.serviceCreateSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), service_controller_1.ServiceController.insertIntoDB);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), service_controller_1.ServiceController.getByIdFromDB);
router.patch('/:id', (0, validateRequest_1.default)(service_validation_1.ServiceValidation.serviceUpdateSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), service_controller_1.ServiceController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SupperAdmin), service_controller_1.ServiceController.deleteFromDB);
exports.ServiceRouter = router;
