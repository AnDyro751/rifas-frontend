import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function Home () {
  const { data: session } = useSession()
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </div>
  )
}
