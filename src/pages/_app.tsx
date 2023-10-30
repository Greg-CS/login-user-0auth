import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Layout } from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENTID as string;
  //  define window
  
  
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
