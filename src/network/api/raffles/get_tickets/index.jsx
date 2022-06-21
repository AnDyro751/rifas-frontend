import fetcher from '../../../../utils/fetcher'
import RafflesBackendRoutes from '../../../../../routes/backend/raffles_routes'

const apiGetTickets = async ({ token, slug, query }) => {
  return await fetcher({
    url: new RafflesBackendRoutes().get_tickets(slug, query),
    headers: { token }
  })
}
export default apiGetTickets
