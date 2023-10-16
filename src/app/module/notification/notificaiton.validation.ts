import { z } from 'zod';

const notificationUpdateSchema = z.object({
  body: z.object({
    read: z
      .boolean({
        required_error: 'read is required',
      })
      .optional(),
  }),
});

export const NotificationValidation = {
  notificationUpdateSchema,
};
