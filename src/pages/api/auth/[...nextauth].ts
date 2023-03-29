import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '~/server/db';

//const prisma = new PrismaClient();

export default NextAuth(
  {
    providers: [
      GoogleProvider({
        clientId:  <string> process.env.GOOGLE_CLIENT_ID,
        clientSecret:  <string> process.env.GOOGLE_CLIENT_SECRET 
      })  
    ],
    adapter: PrismaAdapter(prisma),  
  })



