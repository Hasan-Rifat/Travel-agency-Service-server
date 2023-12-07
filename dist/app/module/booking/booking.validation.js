"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const booking_constants_1 = require("./booking.constants");
const bookingCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({ required_error: 'User ID is required' }),
        serviceId: zod_1.z.string({ required_error: 'Service ID is required' }),
        status: zod_1.z.enum([...booking_constants_1.status], {
            required_error: 'Status is required',
        }),
        paymentId: zod_1.z.optional(zod_1.z.string()),
        start: zod_1.z.string({
            required_error: 'start Date is required',
        }),
        end: zod_1.z.string({
            required_error: 'end date is required',
        }),
        price: zod_1.z.string({
            required_error: 'Price is required',
        }),
        travelers: zod_1.z.number({
            required_error: 'Travelers is required',
        }),
        specialRequests: zod_1.z.string({
            required_error: 'Special Requests is required',
        }),
        totalDays: zod_1.z.number({
            required_error: 'Total days is required',
        }),
    }),
});
const bookingUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.optional(zod_1.z.string()),
        paymentId: zod_1.z.optional(zod_1.z.string()),
        serviceId: zod_1.z.optional(zod_1.z.string()),
        status: zod_1.z.optional(zod_1.z.enum([...booking_constants_1.status])),
        start: zod_1.z.optional(zod_1.z.string()),
        end: zod_1.z.optional(zod_1.z.string()),
        price: zod_1.z.optional(zod_1.z.string()),
        travelers: zod_1.z.optional(zod_1.z.number()),
        specialRequests: zod_1.z.optional(zod_1.z.string()),
        totalDays: zod_1.z.optional(zod_1.z.number()),
    }),
});
exports.BookingValidation = {
    bookingCreateSchema,
    bookingUpdateSchema,
};
