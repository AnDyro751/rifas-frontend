import Image from 'next/image'
import RaffleSerializer from '../../../serializers/raffle'
import makeImageUrl from '../../../utils/makeImageUrl'
import Link from 'next/link'

const RaffleBanner = ({ raffle, with_link = false }) => {
  const raffleSerialized = raffle.constructor.name === 'RaffleSerializer' ? raffle : new RaffleSerializer(raffle)
  return (
    <div class="hero py-10 bg-base-200 max-w-full">
      <div class="hero-content max-w-full px-8 py-4 w-full m-0 overflow-x-hidden flex-col lg:flex-row-reverse">
        <div className="w-7/12 flex justify-center">
          <div className="h-128 rounded-none w-full carousel-center carousel rounded-box space-x-8 pr-4">
            {
              raffleSerialized.cover_urls.map((image, i) => (
                <div
                  key={i}
                  className="relative w-128 h-full carousel-item"
                >
                  <Image
                    loading="lazy"
                    draggable={false}
                    className="min-w-full w-full rounded object-cover object-center"
                    layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={makeImageUrl(image['thumb'])}
                    src={makeImageUrl(image['hero'])}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h1 class="text-5xl font-bold">
            <Link href={`/rifas/${raffleSerialized.id}`}>
              <a className="hover:underline" >
                {raffleSerialized.title}
              </a>
            </Link>
          </h1>
          {
            raffleSerialized.description && (
              <p class="py-6">{raffleSerialized.description}</p>
            )
          }
          {
            with_link ? (
                <Link href={`/rifas/${raffleSerialized.id}`}>
                  <a className="btn btn-primary">Comprar boletos</a>
                </Link>
              )
              :
              (
                <a href="#tickets" className="btn btn-primary">Comprar boletos</a>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default RaffleBanner
