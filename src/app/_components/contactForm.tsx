"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormMessage, FormItem } from "@/components/ui/form"
import { ContactSchema, contactSchema } from "@/lib/formSchemas"
import SubmitButton from "@/components/submitButton"
import { contactFormAction } from "@/_actions/userActions"
import { toast } from "sonner"
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactForm() {
    const [isPending, setIsPending] = useState<boolean>(false)

    const form = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
    })


    async function submitContact(data: ContactSchema) {
        setIsPending(true)
        try {
            const result = await contactSchema.safeParseAsync(data)
            if (!result.success) {
                setIsPending(false)
                return
            }
            const res = await contactFormAction(result.data)
            console.log("🚀 ~ submitContact ~ res:", res)
            if (res.statusCode === 200) {
                form.reset()
                toast.success("Contact form submitted successfully", {
                    description: "We will get back to you soon, thank you!",
                })
            }
        } catch (error) {
            toast.error("Error", {
                description: "Internal Server Error message not sent!",
            })
        }
        setIsPending(false)
    }

    return (
        <div className="container mx-auto my-4 px-4 lg:px-20 relative z-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitContact)}
                    className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl dark:bg-slate-700 bg-slate-200">
                    <h1 className="font-bold uppercase text-5xl text-slate-900 font-nekst">Send us a <br /> message</h1>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input {...field} className="w-full dark:bg-slate-200 text-slate-900 mt-2 p-3 rounded-lg focus:outline-none"
                                            type="text" placeholder="First Name*" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            {...field}
                                            className="w-full dark:bg-slate-100 text-slate-900 mt-2 p-3 rounded-lg focus:outline-none"
                                            type="text"
                                            placeholder="Last Name*" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            {...field}
                                            className="w-full dark:bg-slate-100 text-slate-900 mt-2 p-3 rounded-lg focus:outline-none"
                                            type="email"
                                            placeholder="Email*" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <input
                                            {...field}
                                            className="w-full dark:bg-slate-100 text-slate-900 mt-2 p-3 rounded-lg focus:outline-none"
                                            type="text"
                                            placeholder="Phone" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <textarea
                                        {...field}
                                        placeholder="Message*"
                                        className="w-full h-32 dark:bg-slate-100 text-slate-900 mt-6 mb-4 p-3 rounded-lg focus:outline-none"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SubmitButton
                        text="Send Message"
                        pending={isPending}
                        className="uppercase font-man text-sm font-bold tracking-wide bg-blue-950 text-slate-100 p-3 rounded-lg focus:outline-none my-2 w-1/2 lg:w-1/4 hover:bg-blue-900 transition-colors duration-500" />
                </form>
            </Form>

            <div
                className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-950 rounded-2xl">
                <div className="flex flex-col text-white">
                    <h1 className="text-lg font-nekst md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
                        Contact Us
                    </h1>
                    <p className="text-slate-300 leading-6">
                        Welcome to E-learning, the best learning web app on the web.
                        We provide fun, enjoyable, and challenging games who want to learn English.
                        With us definitely you will learn English in a fun way, and of course we would love to hear from you,
                        so don&apos;t hesitate to contact us.
                    </p>

                    <div className="flex mt-6 w-2/3  justify-start gap-2">
                        <FaMapMarkerAlt className='pt-2' size={25} />
                        <div className="flex flex-col">
                            <h2 className="text-2xl">Main Office</h2>
                            <p className="text-gray-400">
                                Literature department, <br />
                                Erciyes university, <br />
                                Kayseri, Turkey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
