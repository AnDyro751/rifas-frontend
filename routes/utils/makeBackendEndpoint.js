import API_ENDPOINT from './apiEndpoint'

export const joinUrls = (base = API_ENDPOINT(), url) => {
  return new URL(url, base).href
}
export const API_BASE = '/api/internal'

export const joinApiInternalUrl = (path) => {
  return `${API_BASE}/${path}`
}

export const makeBackendEndpoint = (path, query) => {
  const url = new URL(joinUrls(API_ENDPOINT(), joinApiInternalUrl(path)))
  if (query) {
    Object.entries(query)
      .map((item) => {
        if (item[0] === 'page') {
          item[1] = item[1] || 1
        }
        if (item[1] && item[1] !== 'null' && item[1] !== undefined && item[1] !== 'undefined') {
          url.searchParams.append(item[0], item[1])
        }
      })
  }
  return url.href
}
