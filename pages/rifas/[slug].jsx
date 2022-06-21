import RafflesNetwork from '../../src/network/api/raffles'
import MainLayout from '../../src/components/layouts'
import ShowRafflePresentation from '../../src/presentation/raffles/show'

const ShowRafflePage = ({ raffle}) => {
  return (
    <MainLayout>
      <ShowRafflePresentation
        raffle={raffle}
      />
    </MainLayout>
  )
}

export async function getServerSideProps ({ req, query }) {
  const raffle = await new RafflesNetwork().get({
    slug: query.slug
  })
  return {
    props: {
      raffle: raffle.data,
    },
  }
}

export default ShowRafflePage
