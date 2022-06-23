import apiGet from './get'

class ChecksNetwork {
  async get ({slug}) {
    return await apiGet({slug})
  }
}

export default ChecksNetwork
