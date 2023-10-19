"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostValidation = void 0;
const zod_1 = require("zod");
const blogPostCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, { message: 'Title is required' }),
        content: zod_1.z.string().min(1, { message: 'Content is required' }),
        published: zod_1.z.boolean(),
        author: zod_1.z.string().min(1, { message: 'Author is required' }),
        userId: zod_1.z.string().min(1, { message: 'User ID is required' }),
        url: zod_1.z.string().url().min(1, { message: 'URL is required' }),
    }),
});
const blogPostUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1),
        content: zod_1.z.string().min(1),
        published: zod_1.z.boolean(),
        author: zod_1.z.string().min(1),
        userId: zod_1.z.string().min(1),
        url: zod_1.z.string().url().min(1),
    }),
});
exports.BlogPostValidation = {
    blogPostCreateSchema,
    blogPostUpdateSchema,
};
