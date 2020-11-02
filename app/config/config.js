import axios from 'axios';
export const Server = '';
const ajax = axios.create({
  baseURL: Server,
});

export default ajax;
