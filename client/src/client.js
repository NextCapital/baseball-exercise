import axios from 'axios';
import camelCase from 'lodash/camelCase';
import map from 'lodash/map';
import mapKeys from 'lodash/fp/mapKeys';

const client = axios.create({
  baseURL: 'http://localhost:3000'
});

const camelizeKeys = mapKeys(camelCase);

export const getGames = () => {
  return client.get('/games/index').then(({ data }) => {
    return map(data, camelizeKeys);
  });
}

export default client;
