import RafflesNetwork from '../../src/network/api/raffles'
import RafflesPresentation from '../../src/presentation/raffles'
import MainLayout from '../../src/components/layouts'

const IndexRafflesPage = ({ raffles }) => {
  return (
    <MainLayout>
      <RafflesPresentation raffles={raffles}/>
    </MainLayout>
  )
}

export async function getServerSideProps ({ req }) {
  const raffles = await new RafflesNetwork().get_all()
  return {
    props: {
      raffles: raffles.data
    },
  }
}

export default IndexRafflesPage
