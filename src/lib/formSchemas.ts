import * as z from "zod";


export const contactSchema = z.object({
    fullName: z.string().min(3, {
        message: "Name must be at least 3 characters long"
    }).max(50, {
        message: "Name must be at most 50 characters long"
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    subject: z.string().max(50, {
        message: "Subject must be at most 50 characters long"
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 characters long"
    }).max(15, {
        message: "Phone number must be at most 15 characters long"
    }),
    message: z.string().min(12, {
        message: "Message must be at least 12 characters long"
    }).max(200, {
        message: "Message must be at most 200 characters long"
    }),
});

export const signInFormSchema = z.object({
    email: z.string().trim().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().trim().min(8, {
        message: "Password must be at least 8 characters",
    })
})

export const signUpFormSchema = z.object({
    name: z.string().min(3, {
        message: "Username must be at least 3 characters",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    role: z.enum(["ADMIN", "SUPERADMIN"]),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters",
    })
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
})

export const userUpdateSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(3, { message: "Username must be at least 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    role: z.enum(["ADMIN", "SUPERADMIN"]),
})

export const passwordSchema = z.object({
    id: z.number().int().positive(),
    currentPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
    newPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
})

export type ContactSchema = z.infer<typeof contactSchema>;
export type SignInFormSchema = z.infer<typeof signInFormSchema>;
export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
export type UserUpdateSchema = z.infer<typeof userUpdateSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;