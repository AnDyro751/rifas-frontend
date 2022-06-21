const fetcher = async ({
  url,
  headers,
  method = 'get',
  body = null
}) => {
  try {
    const fetchResponse = await (await fetch(url, {
      method,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    })).json()
    const success = fetchResponse.success
    return {
      success,
      response: fetchResponse,
      errors: fetchResponse.errors,
      data: fetchResponse.data || null,
      included: fetchResponse.included || null,
      pagination: {
        total_pages: fetchResponse?.total_pages || 1,
        current_page: fetchResponse?.current_page || 1
      }
    }
  } catch (e) {
    return {
      success: false,
      response: null,
      errors: [e.message]
    }
  }
}
export default fetcher
