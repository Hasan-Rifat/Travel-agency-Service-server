"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const BlogPost_controller_1 = require("./BlogPost.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const BlogPost_validation_1 = require("./BlogPost.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BlogPost_controller_1.BlogPostController.getAllFromDB);
router.post('/', (0, validateRequest_1.default)(BlogPost_validation_1.BlogPostValidation.blogPostCreateSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BlogPost_controller_1.BlogPostController.insertIntoDB);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BlogPost_controller_1.BlogPostController.getByIdFromDB);
router.patch('/:id', (0, validateRequest_1.default)(BlogPost_validation_1.BlogPostValidation.blogPostUpdateSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BlogPost_controller_1.BlogPostController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), BlogPost_controller_1.BlogPostController.deleteFromDB);
exports.BlogPostRouter = router;
