import Header from '../header'
import Footer from '../footer'
import { Head } from 'next/document'

const MainLayout = ({ children }) => {

  return (
    <div>
      <Head>
        <title>
          Rifas Tomin
        </title>
      </Head>
      <Header />
      <main className="w-full flex justify-center flex-wrap">
        {children}
      </main>
      <Footer />
    </div>
  )

}

export default MainLayout
