import { makeBackendEndpoint } from '../utils/makeBackendEndpoint'

class SignInRoutes {
  sign_in () {
    return makeBackendEndpoint('sessions')
  }
}

export default SignInRoutes
