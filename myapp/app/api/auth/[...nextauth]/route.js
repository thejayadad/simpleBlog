import db from "@/lib/db";
import User from "@/models/User";
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from "next-auth";

db.connect()

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ],
    pages: {
      signIn: '/'
    },
    callbacks: {
      async signIn({ profile }){
        return await signInWithOAuth({ profile });
      },
      async jwt({ token }){
        const user = await getUserByEmail({ email: token.email });
        token.user = user;
  
        return token;
      },
      async session({ session, token }){
        session.user = token.user;
        return session;
      }
    }
  }
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };
  
  
  async function signInWithOAuth({ profile }){
    await db.connect();
  
    const user = await User.exists({email: profile.email});
    if(user) return true; 
  
    const newUser = new User({
      name: profile.name,
      email: profile.email,
      avatar: profile.picture
    });
  
    await newUser.save();
  
    return true;
  }
  
  async function getUserByEmail({ email }){
    await db.connect();
    
    const user = await User.findOne({ email });
    if(!user) throw new Error('Email does not exist!');
  
    const newUser = {
      ...user._doc,
      _id: user._id.toString(),

      my_user: true
    }
  
    return newUser;
  }