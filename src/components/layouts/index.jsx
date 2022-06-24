import Link from 'next/link'
import Header from '../header'

const MainLayout = ({ children }) => {

  return (
    <div>
      <Header />
      <main className="w-full flex justify-center">
        {children}
      </main>
    </div>
  )

}

export default MainLayout
