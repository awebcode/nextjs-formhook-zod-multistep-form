import Github from "next-auth/providers/github";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
  
    }),
    Github({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        name: { label: "Name", type: "text", placeholder: "John Smith" },
       
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any, req) {
        if (credentials.type === "GoogleAutoLogin") {
           const user = await prisma.user.findUnique({
             where: {
               email: credentials?.email as string,
             },
           });
          // if (!user?.emailVerified) {
          //   return "Email not verified"
          // }

          if (user) return user;

          return await prisma.user.create({
            data: {
              email: credentials?.email as string,
              name: credentials?.name as string,
              image: credentials?.picture as string,
            },
          })
        } else {
           const user = await prisma.user.findUnique({
             where: {
               email: credentials?.email as string,
             },
           });

           if (!user) throw new Error("User not found");
          //  if (!user?.emailVerified) throw new Error("Email not verified");
            const passwordsMatch = await bcrypt.compare(
              credentials?.password as string,
              user?.password? user?.password:""
            );
           if (!passwordsMatch && user?.password) throw new Error("Incorrect password");
          
           if (user) return user;
           return null;
        }
       
      },
    }),
  ],
  // pages: {
  //   newUser: "/signup",
  //   signIn: "/login",
  //   error: "/error",
  // },

   session: {
     strategy: "jwt",
  },
   secret: process.env.AUTH_SECRET,
});
