"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqValidation = void 0;
const zod_1 = require("zod");
const faqCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string({
            required_error: 'question is required',
        }),
        answer: zod_1.z.string({
            required_error: 'answer is required',
        }),
        category: zod_1.z.string({
            required_error: 'category is required',
        }),
    }),
});
const faqUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z
            .string({
            required_error: 'question is required',
        })
            .optional(),
        answer: zod_1.z
            .string({
            required_error: 'answer is required',
        })
            .optional(),
        category: zod_1.z
            .string({
            required_error: 'category is required',
        })
            .optional(),
    }),
});
exports.FaqValidation = {
    faqCreateSchema,
    faqUpdateSchema,
};
