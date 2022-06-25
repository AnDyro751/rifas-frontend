import Link from 'next/link'
import ButtonInstructions from '../button_instructions'

const Header = () => {
  return (
    <header className="navbar bg-base-100 px-12">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">
            Rifas Tomin 🎉
          </a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/rifas">
          <a className="btn btn-ghost text-gray-700">
            Rifas
          </a>
        </Link>
        <Link href="/b">
          <a className="btn btn-ghost text-gray-700">
            Consultar boleto
          </a>
        </Link>
        <ButtonInstructions id="instructions_header">
          <label htmlFor="instructions_header" className="btn btn-ghost text-gray-700">
            Instrucciones de pago
          </label>
        </ButtonInstructions>
        {/*<Link href="/">*/}
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_CONTACT}?text=Hola`}
          className="btn btn-ghost text-gray-700">
          Contacto
        </a>
        {/*</Link>*/}
      </div>
    </header>
  )
}
export default Header
