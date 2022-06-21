import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import ApiSignIn from '../../../src/network/api/sign_in'

export default NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
      },
      authorize: async (credentials) => {
        try {
          const userResponse = await new ApiSignIn().call({
            phone: credentials.phone,
            code: credentials.code
          })

          if (userResponse.success && !userResponse.response.verify) {
            return {
              ...userResponse.user,
              ...userResponse
            };
          }

          const errorMessage = userResponse.errors[0];
          throw new Error(errorMessage);
        } catch (e) {
          const errorMessage = e.toString();
          throw new Error(`${errorMessage}&phone=${credentials.phone}`);
        }
      }
    })
  ],
  pages: {
    signIn: '/sign_in',
    error: '/sign_in'
  },
  secret: process.env.SECRET_BACKEND,
  callbacks: {
    // Getting the JWT token from API response
    async jwt({
      token,
      user
    }) {
      if (user) {
        token.accessToken = user.token;
        token.role = user.role || 'client';
      }

      return token;
    },

    async session({
      session,
      token
    }) {
      session.accessToken = token.accessToken;
      if (session?.user) {
        session.role = token.role;
      }
      return session;
    }
  }
});
