import { z } from "zod"

export const loginFormSchema = z.object({
    email: z
        .string()
        .min(1,"Email is required")
        .email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
})
export type LoginFormSchema = z.infer<typeof loginFormSchema>