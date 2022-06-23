import fetcher from '../../../../utils/fetcher'
import ChecksRoutes from '../../../../../routes/backend/checks_routes'

const apiGet = async ({slug}) => {
  return await fetcher({
    url: new ChecksRoutes().get({slug}),
    method: 'get'
  })

}

export default apiGet
