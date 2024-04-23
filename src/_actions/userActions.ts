"use server"
import { ContactSchema, contactSchema, } from "@/lib/formSchemas";
// import Mailjet from "node-mailjet";
import { revalidatePath } from "next/cache";




// export async function contactFormAction(values: ContactSchema): Promise<ServerResponse<null>> {
//     try {
//         const defaultClient = SibApiV3Sdk.ApiClient.instance;
//         const apiKey = defaultClient.authentications['api-key'];
//         apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
//         let apiKey = defaultClient.authentications['api-key'];
//         apiKey.apiKey = 'xkeysib-YOUR_API_KEY';
//         const mailjet = Mailjet.apiConnect(
//             `${process.env.MAILJET_API_KEY}`,
//             `${process.env.MAILJET_SECRET_KEY}`,
//         )
//         const result = await contactSchema.safeParseAsync(values)
//         if (!result.success) {
//             return {
//                 statusCode: 400,
//                 status: "Error",
//                 errorMessage: result.error.errors[0].message,
//             }
//         }
//         const { fullName, email, subject, message, phone } = result.data
//         const messageSent = await prisma.contact.create({
//             data: {
//                 fullName,
//                 email,
//                 subject,
//                 phone,
//                 message,
//             }
//         })
//         if (!messageSent) {
//             return {
//                 statusCode: 502,
//                 status: "Error",
//                 errorMessage: "Internal Server Error message not sent!",
//             }
//         }
//         const request = await mailjet
//             .post("send", { version: "v3.1" })
//             .request({
//                 Messages: [
//                     {
//                         From: {
//                             Email: `powergym@mail.com`,
//                             Name: "Power Gym"
//                         },
//                         To: [
//                             {
//                                 Email: email,
//                                 Name: fullName
//                             }
//                         ],
//                         TemplateID: 5810030,
//                         TemplateLanguage: true,
//                         Subject: "Power Gym - Contact Form",
//                         Variables: { name: `${fullName.split(" ")[0]}` }
//                     },
//                 ]
//             })
//         const res = await JSON.parse(JSON.stringify(request.body))
//         if (res.Messages[0].Status !== "success") {
//             return {
//                 statusCode: 502,
//                 status: "Error",
//                 errorMessage: "Internal Server Error with sending the confirmation email",
//             }
//         }
//         revalidatePath("/admin")
//         return {
//             statusCode: 200,
//             status: "Success",
//             successMessage: "Contact form submitted successfully",
//             data: null,
//         }
//     } catch (error) {
//         return {
//             statusCode: 500,
//             status: "Error",
//             errorMessage: "Internal Server Error",
//         }
//     }
// }