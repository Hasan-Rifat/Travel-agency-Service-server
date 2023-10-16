import { z } from 'zod';

const serviceCreateSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    location: z.string().min(1, { message: 'Location is required' }),
    categoryId: z.string().min(1, { message: 'Category ID is required' }),
    price: z
      .number()
      .min(0.01, { message: 'Price must be greater than or equal to 0.01' }),
    description: z.string().min(1, { message: 'Description is required' }),
    availability: z
      .boolean()
      .or(z.string().min(1, { message: 'Availability is required' })),
    url: z.string().url().min(1, { message: 'URL is required' }),
  }),
});

const serviceUpdateSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    location: z.string().min(1).optional(),
    categoryId: z.string().min(1).optional(),
    price: z.number().min(0.01).optional(),
    description: z.string().min(1).optional(),
    availability: z.boolean().optional(),
    url: z.string().url().min(1).optional(),
    public_id: z.string().min(1).optional(),
  }),
});

export const ServiceValidation = {
  serviceCreateSchema,
  serviceUpdateSchema,
};
