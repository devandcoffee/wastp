import axios from 'axios';
import * as config from './config';

const API_ENDPOINT = config.BASE_URL + 'tournaments';

export const get = () => axios.get(API_ENDPOINT)
export const post = (data) => axios.post(API_ENDPOINT, data)
