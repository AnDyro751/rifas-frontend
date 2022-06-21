import fetcher from '../../../../utils/fetcher'
import SalesBackendRoutes from '../../../../../routes/backend/sales_routes'

const apiGetAll = async ({ token }) => {
  return await fetcher({
    url: new SalesBackendRoutes().get_all(),
    headers: { token }
  })
}

export default apiGetAll
