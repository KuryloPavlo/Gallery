import {APPLICATION_KEY, BASE_URL} from './config';

const fetchAPI = url => {
  const fullUrl = `${url}?client_id=${APPLICATION_KEY}`;
  return fetch(fullUrl).then(resp => resp.json());
};

export const fetchPictures = () => {
  return fetchAPI(`${BASE_URL}/photos/`);
};
