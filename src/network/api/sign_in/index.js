import fetcher from '../../../utils/fetcher'
import SignInRoutes from '../../../../routes/backend/sign_in_routes'

class ApiSignIn {
  async call ({ phone, code = '' }) {
    return await fetcher({
      url: new SignInRoutes().sign_in(),
      method: 'POST',
      body: {
        phone,
        code
      }
    })
  }
}

export default ApiSignIn
