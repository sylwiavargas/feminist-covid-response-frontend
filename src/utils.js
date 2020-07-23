const axios = require('axios')
// const BASE_URL = 'http://localhost:3000/api/v1'
const BASE_URL = 'https://infinite-wave-91297.herokuapp.com/api/v1'
const fetchEntries = async () => {
  const data = await axios(`${BASE_URL}/items/`);
  return data
}
const fetchPages = async () => {
  const data = await axios(`${BASE_URL}/pages/`)
  return data
}

const fetchPing = async () => {
  const data = await axios(`${BASE_URL}/ping/`);
  return data
}

const fetchPage = async (str) => {
  const data = await axios(`${BASE_URL}/pages${str}`);
  return data.data
}

export { fetchEntries, fetchPages, fetchPage, fetchPing}
