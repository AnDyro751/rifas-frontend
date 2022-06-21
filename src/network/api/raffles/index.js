import apiGetAll from './get_all'
import apiGet from './get'
import apiGetTickets from './get_tickets'

class RafflesNetwork {
  async get_all (token) {
    return await apiGetAll({ token })
  }

  async get ({ token = '', slug }) {
    return await apiGet({ token, slug })
  }

  async get_tickets ({ token = '', slug, query }) {
    return await apiGetTickets({ token, slug, query })
  }
}

export default RafflesNetwork
