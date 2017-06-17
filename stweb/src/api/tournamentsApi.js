import axios from 'axios';
import * as config from './config';

export const get = () => axios.get(config.BASE_URL + 'tournaments')
