import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt";


export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/signin',
    },
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
        updateAge: 60 * 60,
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const existingUser = {
                    id: "1",
                    name: "Test User",
                    email: "ahmed@gmail.com",
                    password: "$2b$10$"
                }
                // await prisma.user.findUnique({
                //     where: {
                //         email: credentials.email.toLowerCase(),
                //     }
                // })
                if (!existingUser) return null;

                const isPasswordValid = await bcrypt.compare(credentials.password, existingUser.password)
                if (!isPasswordValid) return null;
                return {
                    id: existingUser.id.toString(),
                    name: existingUser.name,
                    email: existingUser.email,
                }
            }
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user, account, profile, }) {
            return token
        },
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async session({ session, token, user }) {
            return session
        },
    }
}