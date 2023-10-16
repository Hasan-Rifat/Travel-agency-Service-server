import { z } from 'zod';

const reviewCreateSchema = z.object({
  body: z.object({
    rating: z.number({
      required_error: 'rating is required',
    }),
    comment: z.string({
      required_error: 'comment is required',
    }),
    serviceId: z.string({
      required_error: 'serviceId is required',
    }),
    userId: z.string({
      required_error: 'userId is required',
    }),
  }),
});

const reviewUpdateSchema = z.object({
  body: z.object({
    rating: z
      .number({
        required_error: 'rating is required',
      })
      .optional(),
    comment: z
      .string({
        required_error: 'comment is required',
      })
      .optional(),
    serviceId: z
      .string({
        required_error: 'serviceId is required',
      })
      .optional(),
    userId: z
      .string({
        required_error: 'userId is required',
      })
      .optional(),
  }),
});

const reviewReplaySchema = z.object({
  body: z.object({
    comment: z.string({
      required_error: 'comment is required',
    }),
    userId: z.string({
      required_error: 'userId is required',
    }),
  }),
});

export const ReviewValidation = {
  reviewCreateSchema,
  reviewUpdateSchema,
  reviewReplaySchema,
};
