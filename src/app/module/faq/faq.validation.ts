import { z } from 'zod';

const faqCreateSchema = z.object({
  body: z.object({
    question: z.string({
      required_error: 'question is required',
    }),
    answer: z.string({
      required_error: 'answer is required',
    }),
    category: z.string({
      required_error: 'category is required',
    }),
  }),
});

const faqUpdateSchema = z.object({
  body: z.object({
    question: z
      .string({
        required_error: 'question is required',
      })
      .optional(),
    answer: z
      .string({
        required_error: 'answer is required',
      })
      .optional(),
    category: z
      .string({
        required_error: 'category is required',
      })
      .optional(),
  }),
});

export const FaqValidation = {
  faqCreateSchema,
  faqUpdateSchema,
};
