import { z } from 'zod';

const loginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

const registerSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required',
    }),
    name: z.string({
      required_error: 'Name is required',
    }),
    role: z.string({
      required_error: 'Role is required',
    }),
    url: z.string({
      required_error: 'Url is required',
    }),
  }),
});

export const AuthValidation = {
  loginSchema,
  registerSchema,
};
