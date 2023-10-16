import { z } from 'zod';

const categoryCreateSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
  }),
});

const categoryUpdateSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'name is required',
      })
      .optional(),
  }),
});

export const CategoryValidation = {
  categoryCreateSchema,
  categoryUpdateSchema,
};
