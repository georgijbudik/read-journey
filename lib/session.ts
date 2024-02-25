import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { ISession } from "@/types";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        name: {
          label: "Username",
          type: "text",
          placeholder: "",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (
          !existingUser ||
          !(await compare(credentials.password, existingUser.password))
        ) {
          // sign up

          return null;
        }

        return {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
        };
      },
    }),
  ],

  // jwt: {
  //   encode: ({ secret, token }) => {
  //     const encodedToken = jsonwebtoken.sign(token!, secret);

  //     return encodedToken;
  //   },

  //   decode: async ({ secret, token }) => {
  //     const decodedToken = jsonwebtoken.verify(token!, secret) as JWT;

  //     return decodedToken;
  //   },
  // },

  theme: {
    colorScheme: "light",
    logo: "/icon.svg",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, name: user.name };
      }

      return token;
    },

    async session({ session, token }) {
      // const email = session?.user?.email as string;
      // try {
      //   const data = (await getUser(email)) as { user?: IUser };
      //   const newSession = {
      //     ...session,
      //     user: {
      //       ...session?.user,
      //       ...data?.user,
      //     },
      //   };
      //   return newSession;
      // } catch (error: any) {
      //   return session;
      // }
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
        },
      };
      return session;
    },

    // async signIn({ user }: { user?: AdapterUser | User }) {
    //   try {
    //     const userExists = (await getUser(user?.email as string)) as {
    //       user?: IUser;
    //     };

    //     if (!userExists) {
    //       await createUser({
    //         name: user?.name as string,
    //         email: user?.email as string,
    //         imageUrl: user?.image as string,
    //       });
    //     }

    //     return true;
    //   } catch (error: any) {
    //     return false;
    //   }

    //   return true;
    // },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as ISession;

  return session;
}
