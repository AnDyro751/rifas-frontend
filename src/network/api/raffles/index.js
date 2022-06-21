import apiGetAll from './get_all'

class RafflesNetwork {
  async get_all (token) {
    return await apiGetAll({ token })
  }
}

export default RafflesNetwork
