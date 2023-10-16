import { z } from 'zod';

const blogPostCreateSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    content: z.string().min(1, { message: 'Content is required' }),
    published: z.boolean(),
    author: z.string().min(1, { message: 'Author is required' }),
    userId: z.string().min(1, { message: 'User ID is required' }),
    url: z.string().url().min(1, { message: 'URL is required' }),
  }),
});

const blogPostUpdateSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    published: z.boolean(),
    author: z.string().min(1),
    userId: z.string().min(1),
    url: z.string().url().min(1),
  }),
});

export const BlogPostValidation = {
  blogPostCreateSchema,
  blogPostUpdateSchema,
};
