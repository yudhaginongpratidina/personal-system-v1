import { z } from "zod"

export const registerFormSchema = z.object({
    username: z
        .string()
        .min(1,"Username is required"),
    email : z
        .string()
        .min(1,"Email is required")
        .email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
    confirmPassword: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
}).refine(data => data.password === data.confirmPassword, { message: "Password and confirm password not match", path: ["confirmPassword"] })
export type RegisterFormSchema = z.infer<typeof registerFormSchema>