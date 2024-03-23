"use server"
import {
    ContactSchema,
    PasswordSchema,
    SignUpFormSchema,
    UserUpdateSchema,
    contactSchema,
    passwordSchema,
    signUpFormSchema,
    userUpdateSchema
} from "@/lib/formSchemas";
import { revalidatePath } from "next/cache";
// import { Resend } from "resend";
import bcrypt, { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function contactFormAction(values: ContactSchema): Promise<ServerResponse<null>> {

    // const resend = new Resend(process.env.RESEND_API_KEY)
    try {
        const result = await contactSchema.safeParseAsync(values)
        if (!result.success) {
            return {
                statusCode: 400,
                status: "Error",
                errorMessage: result.error.errors[0].message,
            }
        }
        const { fullName, email, subject, message } = result.data
        const messageSent = await prisma.contact.create({
            data: {
                fullName,
                email,
                subject,
                message,
            }
        })
        if (!messageSent) {
            return {
                statusCode: 502,
                status: "Error",
                errorMessage: "Internal Server Error message not sent!",
            }
        }
        // const { error } = await resend.emails.send({
        //     from: `Power Gym <onboarding@resend.dev>`,
        //     to: [result.data.email],
        //     subject: "Confirmation email from Power Gym",
        //     text: `
        //     Hello ${result.data.fullName.split(" ")[0]},

        //     Welcome to Power-Gym, we are contacting you to confirm that we have received your message,
        //     and we will get back to you soon.

        //     If you have any questions or need further assistance, please don't hesitate to contact us.

        //     Best regards,
        //     The Power-Gym team

        //     --------------------------------------------------------------------------------------

        //     Cairo, Helwan, 15may city, 17 neighborhood`,
        // })
        // if (error) {
        //     return {
        //         statusCode: 502,
        //         status: "Error",
        //         errorMessage: "Internal Server Error with sending the confirmation email",
        //     }
        // }
        revalidatePath("/admin")
        return {
            statusCode: 200,
            status: "Success",
            successMessage: "Contact form submitted successfully",
            data: null,
        }

    } catch (error) {
        return {
            statusCode: 500,
            status: "Error",
            errorMessage: "Internal Server Error",
        }
    }
}

export async function signUpAction(values: SignUpFormSchema): Promise<ServerResponse<null>> {
    try {
        const result = await signUpFormSchema.safeParseAsync(values)
        if (!result.success) {
            return { status: "Error", errorMessage: "Something wrong with entered data.", statusCode: 401 }
        }
        const { name, email, password, role } = result.data
        const existedUserEmail = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        if (existedUserEmail) {
            return { status: "Error", errorMessage: "There is a user already with this email!", statusCode: 409 }
        }
        const hashedPassword = await hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: hashedPassword,
                role,
            }
        })
        const { email: userEmail } = user
        revalidatePath("/admin/accounts")
        return {
            status: "Success",
            successMessage: `User has been created successfully with this email ${userEmail}`,
            statusCode: 201,
            data: null
        }
    } catch (error) {
        console.log(error);
        return { status: "Error", errorMessage: "Something went wrong!", statusCode: 401 }
    }
}


export async function updateUser(values: UserUpdateSchema) {
    try {
        const result = await userUpdateSchema.safeParseAsync(values)
        if (!result.success) {
            return { error: true, message: "Something wrong with entered data!", status: 401 }
        }
        const { name, email, id, role } = result.data
        const res = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                email,
                role
            }
        })
        revalidatePath("/admin/accounts")
        return { error: false, message: `User has been updated successfully.`, status: 200 }
    } catch (error) {
        console.log(error);
        return { error: true, message: "Something went wrong!", status: 401 }
    }
}

export async function updatePassword(values: PasswordSchema) {
    try {
        const result = await passwordSchema.safeParseAsync(values)
        if (!result.success) {
            return { error: true, message: "Something wrong with entered data!", status: 401 }
        }
        const { currentPassword, newPassword, id } = result.data
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        const isMatch = await bcrypt.compare(currentPassword, user?.password!)
        if (!isMatch) {
            return { error: true, message: "Current password is not correct!", status: 401 }
        }
        const hashedPassword = await hash(newPassword, 10)
        await prisma.user.update({
            where: {
                id
            },
            data: {
                password: hashedPassword
            }
        })
        revalidatePath("/admin/accounts")
        return { error: false, message: "Password has been updated successfully.", status: 200 }
    } catch (error) {
        console.log(error);
        return { error: true, message: "Something went wrong!", status: 401 }
    }
}