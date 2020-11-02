import axios from 'axios';
 const APP_HOST_API = 'http://mdev.orderqc.com/app/'

class AxiosService {
  constructor() {
    this.instance = axios.create({
      baseURL: APP_HOST_API,
      timeout: 3000,
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    this.instanceUpload = axios.create({
      baseURL: APP_HOST_API,
      timeout: 3000,
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    this.instance.interceptors.request.use(this.handlerRequest);
    this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handlerRequest(request) {
    return request;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url, config = null) {
    return this.instance.get(url, config);
  }

  post(url, data, config = null) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config = null) {
    return this.instance.put(url, data, config);
  }

  upload(url, data, config = null) {
    return this.instanceUpload.post(url, data, config);
  }

  delete(url, param) {
    return this.instance.delete(url, param);
  }

  setToken = (token) => {
    this.instance.defaults.headers.common['Authorization'] = token;
  };
}

const axiosService = new AxiosService();
export default axiosService;
