"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const serviceCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: 'Name is required' }),
        location: zod_1.z.string().min(1, { message: 'Location is required' }),
        categoryId: zod_1.z.string().min(1, { message: 'Category ID is required' }),
        price: zod_1.z
            .number()
            .min(0.01, { message: 'Price must be greater than or equal to 0.01' }),
        description: zod_1.z.string().min(1, { message: 'Description is required' }),
        availability: zod_1.z
            .boolean()
            .or(zod_1.z.string().min(1, { message: 'Availability is required' })),
        url: zod_1.z.string().url().min(1, { message: 'URL is required' }),
    }),
});
const serviceUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).optional(),
        location: zod_1.z.string().min(1).optional(),
        categoryId: zod_1.z.string().min(1).optional(),
        price: zod_1.z.number().min(0.01).optional(),
        description: zod_1.z.string().min(1).optional(),
        availability: zod_1.z.boolean().optional(),
        url: zod_1.z.string().url().min(1).optional(),
        public_id: zod_1.z.string().min(1).optional(),
    }),
});
exports.ServiceValidation = {
    serviceCreateSchema,
    serviceUpdateSchema,
};
