import axios from '../utils/http'
import MockAdapter from 'axios-mock-adapter'
import navList from './data/navlist'
import banList from './data/banlist'
import tjList from './data/tjlist'
import togeList from './data/togelist'

let mock = new MockAdapter(axios, { delayResponse: 1000 })

mock.onGet('/api/navlist').reply(config => {
  return [200, navList]
})

mock.onGet('/api/banlist').reply(config => {
  return [200, banList]
})

mock.onGet('/api/tjlist').reply(config => {
  return [200, tjList]
})

mock.onGet('/api/togelist').reply(config => {
  let {page, size} = config.params
  return [200, togeList.splice(page * size, size)]
})
