import axios from 'axios';
import { stringify as qs } from 'querystringify';

const API_URL = 'https://api.coindesk.com/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function registration(data: any) {
  return api.post('/v1/users', data);
}

export function login(data: any) {
  return api.post('/v1/user/login', data);
}

export function getExamplePrice(data: any) {
  console.log('api', data);
  return api.get('v1/bpi/currentprice.json');
}

export function getWithQuery(page = 1, search = '') {
  const query = qs({
    'per-page': 30,
    sort: 'ASC',
    page,
    title: search,
    sku: search,
  });
  return api.get(`/v1/product?${query}`);
}

export function get(id: number | string) {
  return api.get(`/v1/product/${id}?expand=variants`);
}

export function create(data: any) {
  return api.post('/v1/product', data);
}

export function update(data: any, id: number) {
  return api.put(`/v1/product/${id}`, data);
}

export function deleteProd(id: number) {
  return api.put(`/v1/product/${id}`);
}
