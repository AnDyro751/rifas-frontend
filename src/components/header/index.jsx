import Link from 'next/link'
import ButtonInstructions from '../button_instructions'
import OffCanvasMenu from './off_canvas'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <header className="navbar bg-base-100 px-2 md:px-12">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">
            Rifas Tomin 🎉
          </a>
        </Link>
      </div>
      <div className="flex md:hidden">
        <button
          onClick={handleClick}
          className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               className="inline-block w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <OffCanvasMenu
        handleClose={handleClose}
        open={open}
      />
      <div className="space-x-4 hidden md:flex">
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
