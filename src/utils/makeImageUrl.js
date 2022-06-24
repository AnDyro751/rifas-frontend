import API_ENDPOINT from '../../routes/utils/apiEndpoint'

const makeImageUrl = (imageUrl = '') => {
  return `${API_ENDPOINT()}${imageUrl}`
}

export default makeImageUrl
