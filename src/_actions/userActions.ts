"use server"
import { ContactSchema, contactSchema, } from "@/lib/formSchemas";
import sgMail from "@sendgrid/mail";




export async function contactFormAction(values: ContactSchema): Promise<ServerResponse<null>> {
    sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`)
    try {

        const result = await contactSchema.safeParseAsync(values)
        if (!result.success) {
            return {
                statusCode: 400,
                status: "Error",
                errorMessage: result.error.errors[0].message,
            }
        }
        const { firstName, lastName, email, message, phone } = result.data
        const fullName = `${firstName} ${lastName}`
        const sentMessage = [
            {
                to: email,
                from: "E-Learning <learninge@mail.com>",
                subject: "Contact Form Submission",
                templateId: "d-0c19a7cd19214cc6b17081425c1f1948",
                replyTo: "learninge@mail.com",
                dynamicTemplateData: {
                    name: fullName,
                },
            },
            {
                to: "learninge@mail.com",
                from: "E-Learning <learninge@mail.com>",
                subject: "Contact Form Submission",
                text: `Name: ${fullName} \n Email: ${email} \n Phone: ${phone} \n Message: ${message}`,
                html: `<p>Name: ${fullName}</p> <p>Email: ${email}</p> <p>Phone: ${phone}</p> <p>Message: ${message}</p>`
            }
        ]

        const res = await sgMail.send(sentMessage)
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