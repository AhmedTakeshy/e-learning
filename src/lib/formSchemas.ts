import * as z from "zod";


export const contactSchema = z.object({
    firstName: z.string().min(3, {
        message: "Name must be at least 3 characters long"
    }).max(50, {
        message: "Name must be at most 50 characters long"
    }),
    lastName: z.string().min(3, {
        message: "Name must be at least 3 characters long"
    }).max(50, {
        message: "Name must be at most 50 characters long"
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    phone: z.string().max(15, {
        message: "Phone number must be at most 15 characters long"
    }).optional(),
    message: z.string().min(12, {
        message: "Message must be at least 12 characters long"
    }).max(200, {
        message: "Message must be at most 200 characters long"
    }),
});



export type ContactSchema = z.infer<typeof contactSchema>;
