import fetcher from '../../../../utils/fetcher'
import RafflesBackendRoutes from '../../../../../routes/backend/raffles_routes'

const apiGetAll = async ({ token }) => {
  return await fetcher({
    url: new RafflesBackendRoutes().get_all(),
    headers: { token }
  })
}

export default apiGetAll
