"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const booking_constants_1 = require("./booking.constants");
const bookingCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().min(1, { message: 'User ID is required' }),
        serviceId: zod_1.z.string().min(1, { message: 'Service ID is required' }),
        status: zod_1.z.enum([...booking_constants_1.status], {
            required_error: 'Status is required',
        }),
        date: zod_1.z.string({
            required_error: 'Date is required',
        }),
        travelers: zod_1.z
            .number({
            required_error: 'Travelers is required',
        })
            .min(1),
        specialRequests: zod_1.z
            .string({
            required_error: 'Special Requests is required',
        })
            .min(1),
    }),
});
const bookingUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().min(1, { message: 'User ID is required' }).optional(),
        serviceId: zod_1.z
            .string()
            .min(1, { message: 'Service ID is required' })
            .optional(),
        status: zod_1.z
            .enum([...booking_constants_1.status], {
            required_error: 'Status is required',
        })
            .optional(),
        date: zod_1.z.string({ required_error: 'Date is required' }).optional(),
        travelers: zod_1.z
            .number({ required_error: 'Travelers is required' })
            .min(1)
            .optional(),
        specialRequests: zod_1.z
            .string({ required_error: 'Special Requests is required' })
            .min(1)
            .optional(),
    }),
});
exports.BookingValidation = {
    bookingCreateSchema,
    bookingUpdateSchema,
};
