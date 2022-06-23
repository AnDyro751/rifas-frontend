import MainLayout from '../../src/components/layouts'
import CheckPresentation from '../../src/presentation/check'
import ChecksNetwork from '../../src/network/api/checks'

const CheckPage = ({ check, include }) => {
  return (
    <MainLayout>
      <CheckPresentation
        include={include}
        check={check}
      />
    </MainLayout>
  )

}

export async function getServerSideProps ({ req, query }) {
  const check = await new ChecksNetwork().get({
    slug: query.slug
  })
  console.log("CHECK", check)
  return {
    props: {
      check: check.data,
      include: check.included
    },
  }
}

export default CheckPage
