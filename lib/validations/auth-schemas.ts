import { z } from "zod";

/**
 * Login form validation schema
 */
export const loginSchema = z.object({
    emailOrUsername: z
        .string()
        .min(1, "Email or username is required")
        .refine(
            (value) => {
                // Check if it's a valid email or a non-empty username
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) || value.length >= 3;
            },
            {
                message: "Please enter a valid email or username (min 3 characters)",
            }
        ),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * Register form validation schema
 */
export const registerSchema = z
    .object({
        fullName: z
            .string()
            .min(2, "Full name must be at least 2 characters")
            .max(100, "Full name must not exceed 100 characters")
            .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
        email: z
            .string()
            .min(1, "Email is required")
            .email("Please enter a valid email address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number"),
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<typeof registerSchema>;
