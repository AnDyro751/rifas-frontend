import Link from 'next/link'
import ButtonInstructions from '../../button_instructions'

const OffCanvasMenu = ({ open = false, handleClose }) => {

  if (!open) {
    return null
  }

  return (
    <section className="fixed h-screen top-0 inset-y-0 right-0 z-50 flex">
      <div className="w-screen max-w-sm h-screen">
        <div className="flex flex-col h-full divide-y divide-gray-200 bg-gray-50">
          <div className="overflow-y-scroll">
            <section className="flex items-center justify-between h-16 pl-6">
          <span className="text-sm font-medium tracking-widest uppercase">
            Menú
          </span>

              <button
                onClick={handleClose}
                aria-label="Close menu"
                className="w-16 h-16 border-l border-gray-200"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </section>

            <nav
              className="flex flex-col text-sm font-medium text-gray-500 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              <Link href="/">
                <a className="px-6 py-3">Inicio</a>
              </Link>

              <Link href="/rifas">
                <a className="px-6 py-3">Rifas</a>
              </Link>

              <Link href="/b">
                <a className="px-6 py-3">Consultar boleto</a>
              </Link>

              <a
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_CONTACT}?text=Hola`}
                className="px-6 py-3"
              >
                Contacto
              </a>

              <div className="px-6 py-3">
                <ButtonInstructions id="instructions_header_mobile">
                  <label htmlFor="instructions_header_mobile" className="btn btn-sm btn-primary">
                    Instrucciones de pago
                  </label>
                </ButtonInstructions>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )

}

export default OffCanvasMenu
