import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";

export const authOptions = {
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 * 7 },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await prisma.user.findFirst({ where: { email: credentials.email, emailVerified: true } });
        if (!user) return null;
        const valid = await compare(credentials.password, user.password);
        if (!valid) return null;
        return { id: user.id, email: user.email, firstName:  user.firstName ?? null ,lastName: user.lastName ?? null, isAdmin: user.isAdmin ?? false };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.email = user.email ?? null;
        token.firstName = user.firstName ?? null;
        token.lastName = user.lastName ?? null;
        token.isAdmin = user.isAdmin ?? false;
      }

      if (trigger === "update" && session) {
        if (session.firstName) token.firstName = session.firstName;
        if (session.lastName) token.lastName = session.lastName;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email ?? null;
        session.user.firstName = token.firstName ?? null;
        session.user.lastName = token.lastName ?? null;
        session.user.isAdmin = token.isAdmin ?? false;
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


