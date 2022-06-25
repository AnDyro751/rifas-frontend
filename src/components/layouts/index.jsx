import Header from '../header'
import Footer from '../footer'

const MainLayout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className="w-full flex justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )

}

export default MainLayout
