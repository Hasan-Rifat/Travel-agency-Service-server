"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email(),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
    }),
});
const registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email(),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        role: zod_1.z.string({
            required_error: 'Role is required',
        }),
        url: zod_1.z.string({
            required_error: 'Url is required',
        }),
    }),
});
exports.AuthValidation = {
    loginSchema,
    registerSchema,
};
