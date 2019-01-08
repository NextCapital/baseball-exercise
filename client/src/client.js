import axios from 'axios';
import camelCase from 'lodash/camelCase';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';

const client = axios.create({
  baseURL: 'http://localhost:3000'
});

const camelizeKeys = (obj) => {
  return mapKeys(obj, (_value, key) => camelCase(key));
};

export const getGames = () => {
  return client.get('/games/index').then(({ data }) => {
    return map(data, camelizeKeys);
  });
}

export default client;
