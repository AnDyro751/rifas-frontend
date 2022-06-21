import fetcher from '../../../../utils/fetcher'
import RafflesBackendRoutes from '../../../../../routes/backend/raffles_routes'

const apiGet = async ({ token, slug }) => {
  return await fetcher({
    url: new RafflesBackendRoutes().get(slug),
    headers: { token }
  })
}

export default apiGet
