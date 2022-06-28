import Image from 'next/image'
import RaffleSerializer from '../../../serializers/raffle'
import Link from 'next/link'

const RaffleBanner = ({ raffle, with_link = false }) => {
  const raffleSerialized = raffle.constructor.name === 'RaffleSerializer' ? raffle : new RaffleSerializer(raffle)
  return (
    <div className="hero py-10 bg-base-200 max-w-full">
      <div className="hero-content max-w-full px-4 md:px-8 py-4 w-full m-0 overflow-x-hidden flex-col lg:flex-row-reverse">
        <div className="w-full md:w-7/12 flex justify-center">
          <div className="h-60 md:h-128 rounded-none w-full carousel-center carousel rounded-box space-x-4 md:space-x-8 pr-4">
            {
              raffleSerialized.cover_urls.map((image, i) => (
                <div
                  key={i}
                  className="relative w-60 md:w-128 h-full carousel-item"
                >
                  <Image
                    loading="lazy"
                    draggable={false}
                    className="min-w-full w-full rounded object-cover object-center"
                    layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={image['thumb']}
                    src={image['hero']}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-5xl mt-4 md:mt-0 font-bold">
            <Link href={`/rifas/${raffleSerialized.id}`}>
              <a className="hover:underline" >
                {raffleSerialized.title}
              </a>
            </Link>
          </h1>
          {
            raffleSerialized.description && (
              <p className="py-6 md:text-base text-sm">{raffleSerialized.description}</p>
            )
          }
          {
            with_link ? (
                <Link href={`/rifas/${raffleSerialized.id}`}>
                  <a className="btn btn-primary mt-6 md:w-auto w-full">Comprar boletos</a>
                </Link>
              )
              :
              (
                <a href="#tickets" className="btn btn-primary mt-6 md:w-auto w-full">Comprar boletos</a>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default RaffleBanner
