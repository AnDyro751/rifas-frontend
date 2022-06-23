import { makeBackendEndpoint } from '../utils/makeBackendEndpoint'

class ChecksRoutes {
  get ({slug}) {
    return makeBackendEndpoint(`checks/${slug}.json`, {}, false)
  }
}

export default ChecksRoutes
