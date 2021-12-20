function getBeer (id) {
  const URL = `https://api.punkapi.com/v2/beers/${id ?? 'random'}`
  return fetch(URL).then((result) => { return result.json() })
}

export default {
  getBeer
}
