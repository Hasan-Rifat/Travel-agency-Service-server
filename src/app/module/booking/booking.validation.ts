import { z } from 'zod';
import { status } from './booking.constants';

const bookingCreateSchema = z.object({
  body: z.object({
    userId: z.string({ required_error: 'User ID is required' }),
    serviceId: z.string({ required_error: 'Service ID is required' }),
    status: z.enum([...status] as [string, ...string[]], {
      required_error: 'Status is required',
    }),
    paymentId: z.optional(z.string()),
    start: z.string({
      required_error: 'start Date is required',
    }),
    end: z.string({
      required_error: 'end date is required',
    }),
    price: z.string({
      required_error: 'Price is required',
    }),

    travelers: z.number({
      required_error: 'Travelers is required',
    }),
    specialRequests: z.string({
      required_error: 'Special Requests is required',
    }),
    totalDays: z.number({
      required_error: 'Total days is required',
    }),
  }),
});

const bookingUpdateSchema = z.object({
  body: z.object({
    userId: z.optional(z.string()),
    paymentId: z.optional(z.string()),
    serviceId: z.optional(z.string()),
    status: z.optional(z.enum([...status] as [string, ...string[]])),
    start: z.optional(z.string()),
    end: z.optional(z.string()),
    price: z.optional(z.string()),
    travelers: z.optional(z.number()),
    specialRequests: z.optional(z.string()),
    totalDays: z.optional(z.number()),
  }),
});

export const BookingValidation = {
  bookingCreateSchema,
  bookingUpdateSchema,
};
