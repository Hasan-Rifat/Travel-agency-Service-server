import { z } from 'zod';
import { status } from './booking.constants';

const bookingCreateSchema = z.object({
  body: z.object({
    userId: z.string().min(1, { message: 'User ID is required' }),
    serviceId: z.string().min(1, { message: 'Service ID is required' }),
    status: z.enum([...status] as [string, ...string[]], {
      required_error: 'Status is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    travelers: z
      .number({
        required_error: 'Travelers is required',
      })
      .min(1),
    specialRequests: z
      .string({
        required_error: 'Special Requests is required',
      })
      .min(1),
  }),
});

const bookingUpdateSchema = z.object({
  body: z.object({
    userId: z.string().min(1, { message: 'User ID is required' }).optional(),
    serviceId: z
      .string()
      .min(1, { message: 'Service ID is required' })
      .optional(),
    status: z
      .enum([...status] as [string, ...string[]], {
        required_error: 'Status is required',
      })
      .optional(),
    date: z.string({ required_error: 'Date is required' }).optional(),
    travelers: z
      .number({ required_error: 'Travelers is required' })
      .min(1)
      .optional(),
    specialRequests: z
      .string({ required_error: 'Special Requests is required' })
      .min(1)
      .optional(),
  }),
});

export const BookingValidation = {
  bookingCreateSchema,
  bookingUpdateSchema,
};
