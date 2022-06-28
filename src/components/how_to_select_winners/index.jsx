import RaffleSerializer from '../../serializers/raffle'
import Link from 'next/link'
import Image from 'next/image'

const HowToSelectWinners = ({ raffle = {} }) => {
  const raffleSerialized = new RaffleSerializer(raffle)
  return (
    <>
      <section className="relative bg-white">
        <Image
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-40 sm:opacity-100"
          src="https://res.cloudinary.com/healthbox/image/upload/v1656187217/rzr-xp-1000-01-thumb_k1fbcf.webp"
          alt="rifas tomin banner"
          layout="fill"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r from-primary to-transparent"/>

        <div className="relative max-w-screen-xl px-4 py-12 lg:py-32 mx-auto lg:h-128 lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold sm:text-6xl">
              Rifas Tomin
            </h1>

            <div className="flex flex-wrap gap-4 mt-2 md:mt-8 text-center items-center justify-center">
              {
                raffleSerialized.id ?
                  (
                    <Link
                      href={`/rifas/${raffleSerialized.id}`}
                    >
                      <a
                        className="btn btn-primary w-full md:w-auto"
                      >
                        Comprar boletos
                      </a>
                    </Link>
                  )
                  :
                  (
                    <Link
                      href="/rifas"
                    >
                      <a
                        className="btn btn-link text-black w-full md:w-auto"
                      >
                        Ver rifas
                      </a>
                    </Link>
                  )
              }

              <Link
                href="/b"
              >
                <a
                  className="btn-secondary btn"
                >
                  Consultar boleto
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="w-11/12 my-12 space-y-8">
          <h3 className="font-bold text-2xl md:text-3xl">
            ¿CÓMO SE ELIGE A LOS GANADORES?
          </h3>
          <p className="md:text-xl">
            Todos nuestros sorteos se realizan en base a la Lotería Nacional para la Asistencia Pública mexicana.​
          </p>

          <p className="md:text-xl">
            El ganador de Rifas El Aguila será el participante cuyo número de boleto coincida con las últimas cifras del
            primer premio ganador de la Lotería Nacional (las fechas serán publicadas en nuestra página oficial).
          </p>

          <h3 className="font-bold text-2xl md:text-3xl">
            ¿QUÉ SUCEDE CUANDO EL NÚMERO GANADOR ES UN BOLETO NO VENDIDO?
          </h3>
          <p className="md:text-xl">
            Se elige un nuevo ganador realizando la misma dinámica en otra fecha cercana (se anunciará la nueva fecha).
          </p>
          <p className="md:text-xl">
            Esto significa que, ¡Tendrías el doble de oportunidades de ganar con tu mismo boleto!
          </p>
        </div>
      </div>
    </>
  )
}
export default HowToSelectWinners
