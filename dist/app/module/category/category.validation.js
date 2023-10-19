"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = require("zod");
const categoryCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
    }),
});
const categoryUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'name is required',
        })
            .optional(),
    }),
});
exports.CategoryValidation = {
    categoryCreateSchema,
    categoryUpdateSchema,
};
