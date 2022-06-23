import fetcher from '../../../utils/fetcher'
import Raffles_routes from '../../../../routes/backend/raffles_routes'

class CreateCheckService {
  async call ({ tickets, raffle_id, user_phone, user_name }) {
    return await fetcher({
      url: new Raffles_routes().createCheck(),
      method: 'POST',
      body: {
        check: {
          tickets,
          raffle_id,
          user_phone,
          user_name
        }
      }
    })
  }
}

export default CreateCheckService
