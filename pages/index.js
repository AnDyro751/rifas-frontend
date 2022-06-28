import RafflesNetwork from '../src/network/api/raffles'
import MainLayout from '../src/components/layouts'
import RaffleBanner from '../src/presentation/raffles/banner'
import HowToSelectWinners from '../src/components/how_to_select_winners'

export default function Home ({ raffle = {} }) {

  return (
    <MainLayout>
      <section className="w-full" >
        <HowToSelectWinners />
      </section>
      <div className="w-full flex space-y-8 flex-wrap">
        <RaffleBanner raffle={raffle} with_link={true}/>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps ({ req }) {
  const raffle = await new RafflesNetwork().get({
    slug: '2'
  })

  return {
    props: {
      raffle: raffle.data
    },
  }
}

