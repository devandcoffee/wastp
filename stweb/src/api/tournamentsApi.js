import axios from 'axios';
import * as config from './config';

const API_ENDPOINT = config.BASE_URL + 'tournaments/';

export const remove = (id) => axios.delete(`${API_ENDPOINT}${encodeURI(id)}`)
export const get = () => axios.get(API_ENDPOINT)
export const patch = (id, data) => axios.patch(`${API_ENDPOINT}${encodeURI(id)}`, data)
export const post = (data) => axios.post(API_ENDPOINT, data)
export const put = (id, data) => axios.put(`${API_ENDPOINT}${encodeURI(id)}`, data)
