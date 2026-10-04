// features/auth/utils/auth-schema.ts
import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, "the first name must be at least 2 characters long"),
  lastName: z
    .string()
    .min(2, "the last name must be at least 2 characters long"),
  email: z.string().email("invalid email address"),
  password: z
    .string()
    .min(8, "the password must be at least 8 characters long")
    .regex(/[A-Z]/, "the password must contain at least one uppercase letter")
    .regex(/[0-9]/, "the password must contain at least one number"),
  phone: z.string().min(10, "invalid phone number"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
