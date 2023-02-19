import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId:  <string> process.env.GOOGLE_ID,
        clientSecret:  <string> process.env.GOOGLE_SECRET  
      })  
    ]
})


