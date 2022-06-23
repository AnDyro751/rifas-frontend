import Link from 'next/link'

const MainLayout = ({ children }) => {

  return (
    <div>
      <header>
        <Link href="/rifas">
          <a>Rifas</a>
        </Link>

        <Link href="/verificar-ticket">
          <a>Verificar ticket</a>
        </Link>
      </header>
      <main className="w-full flex justify-center">
        {children}
      </main>
    </div>
  )

}

export default MainLayout
