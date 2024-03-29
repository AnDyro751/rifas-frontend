import { makeBackendEndpoint } from '../utils/makeBackendEndpoint'

class RafflesBackendRoutes {
  get_all (query) {
    return makeBackendEndpoint('raffles', query, false)
  }
  get(slug){
    return makeBackendEndpoint(`raffles/${slug}`, {}, false)
  }

  get_tickets(slug, query){
    return makeBackendEndpoint(`raffles/${slug}/tickets`, query, false)
  }
  createCheck(){
    return makeBackendEndpoint(`checks.json`, {}, false)
  }
}

export default RafflesBackendRoutes
