"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email()
            .optional(),
        password: zod_1.z
            .string({
            required_error: 'Password is required',
        })
            .optional(),
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .optional(),
        role: zod_1.z
            .string({
            required_error: 'Role is required',
        })
            .optional(),
        url: zod_1.z
            .string({
            required_error: 'Url is required',
        })
            .optional(),
        public_id: zod_1.z
            .string({
            required_error: 'Public id is required',
        })
            .optional(),
    }),
});
exports.UserValidation = {
    userUpdateSchema,
};
