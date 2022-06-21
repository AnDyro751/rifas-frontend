const API_ENDPOINT = () => {
  return process.env.NEXT_PUBLIC_ENDPOINT || 'http://error.com';
};
export default API_ENDPOINT;
