import fetcher from '../../../../utils/fetcher'
import RafflesBackendRoutes from '../../../../../routes/backend/raffles_routes'

const apiGetAll = async ({ token, query }) => {
  return await fetcher({
    url: new RafflesBackendRoutes().get_all(query),
    headers: { token }
  })
}

export default apiGetAll
