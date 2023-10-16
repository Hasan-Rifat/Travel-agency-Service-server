import { z } from 'zod';

const userUpdateSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email()
      .optional(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .optional(),
    name: z
      .string({
        required_error: 'Name is required',
      })
      .optional(),
    role: z
      .string({
        required_error: 'Role is required',
      })
      .optional(),
    url: z
      .string({
        required_error: 'Url is required',
      })
      .optional(),
    public_id: z
      .string({
        required_error: 'Public id is required',
      })
      .optional(),
  }),
});

export const UserValidation = {
  userUpdateSchema,
};
