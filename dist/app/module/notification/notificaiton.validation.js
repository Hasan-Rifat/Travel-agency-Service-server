"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationValidation = void 0;
const zod_1 = require("zod");
const notificationUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        read: zod_1.z
            .boolean({
            required_error: 'read is required',
        })
            .optional(),
    }),
});
exports.NotificationValidation = {
    notificationUpdateSchema,
};
