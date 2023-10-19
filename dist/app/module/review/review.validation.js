"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const reviewCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        rating: zod_1.z.number({
            required_error: 'rating is required',
        }),
        comment: zod_1.z.string({
            required_error: 'comment is required',
        }),
        serviceId: zod_1.z.string({
            required_error: 'serviceId is required',
        }),
        userId: zod_1.z.string({
            required_error: 'userId is required',
        }),
    }),
});
const reviewUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        rating: zod_1.z
            .number({
            required_error: 'rating is required',
        })
            .optional(),
        comment: zod_1.z
            .string({
            required_error: 'comment is required',
        })
            .optional(),
        serviceId: zod_1.z
            .string({
            required_error: 'serviceId is required',
        })
            .optional(),
        userId: zod_1.z
            .string({
            required_error: 'userId is required',
        })
            .optional(),
    }),
});
const reviewReplaySchema = zod_1.z.object({
    body: zod_1.z.object({
        comment: zod_1.z.string({
            required_error: 'comment is required',
        }),
        userId: zod_1.z.string({
            required_error: 'userId is required',
        }),
    }),
});
exports.ReviewValidation = {
    reviewCreateSchema,
    reviewUpdateSchema,
    reviewReplaySchema,
};
