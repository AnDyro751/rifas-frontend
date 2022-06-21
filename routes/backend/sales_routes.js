import { makeBackendEndpoint } from '../utils/makeBackendEndpoint'

class SalesBackendRoutes {
  get_all () {
    return makeBackendEndpoint('raffles', {}, false)
  }
}

export default SalesBackendRoutes
