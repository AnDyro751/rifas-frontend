import '../styles/global.css'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import React from 'react'
export default function App ({
  Component,
  pageProps: { session, ...pageProps },
}) {

  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <>

      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster
          position="top-right"
        />
      </SessionProvider>
    </>
  )
}

