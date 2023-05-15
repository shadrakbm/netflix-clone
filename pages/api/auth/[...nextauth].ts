import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

import prismadb from "@/lib/prismadb"

import { compare } from "bcrypt"

export default NextAuth({
    providers: [
        Credentials({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Adresse mail",
                    type: "text"      
                },
                password: {
                    label: "Mot de passe",
                    type: "password"
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Une adresse mail et un mot de passe sont nécessaires")
                }
                const user = prismadb.user.findUnique({
                    where: {
                        email: credentials.email                 
                    }
                })
                if (!user || !user.hashedPassword) {
                    throw new Error("Cette adresse mail n'existe pas")
                }
                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashedPassword
                )
                if (!isCorrectPassword) {
                    throw new Error("Le mot de passe est incorrect")
                }
                return user
            }
        })
    ],
    pages: {
        signIn: "/auth"
    },
    debug: process.env.NODE_ENV !== "production",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
})