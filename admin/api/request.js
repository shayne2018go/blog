import axios from 'axios'
import Cookie from 'js-cookie'

const service = axios.create({
  // baseURL: 'http://localhost:9999/v1',
  timeout: 10000,
  // headers: {
  //   'Content-type': 'application/json'
  // }
})

// 请求拦截

service.interceptors.request.use(config => {
  let auth = Cookie.get('Authorization')
  config.headers = Object.assign({ 'Content-type': 'application/json', 'Authorization': auth }, config.headers)
  return config
}, err => {
  console.log('interceptors: ' + err)
})

// 响应拦截
service.interceptors.response.use(data => {
  return data.data
}, err => {
  // 错误处理
  if (err && err.response) {
    switch (err.response.status) {
      case 400: err.message = '请求错误(400)'; break;
      case 401: err.message = '未授权，请重新登录(401)'; break;
      case 403: err.message = '拒绝访问(403)'; break;
      case 404: err.message = '请求出错(404)'; break;
      case 408: err.message = '请求超时(408)'; break;
      case 500: err.message = '服务器错误(500)'; break;
      case 501: err.message = '服务未实现(501)'; break;
      case 502: err.message = '网络错误(502)'; break;
      case 503: err.message = '服务不可用(503)'; break;
      case 504: err.message = '网络超时(504)'; break;
      case 505: err.message = 'HTTP版本不受支持(505)'; break;
      default: err.message = `连接出错(${err.response.status})!`;
    }
  } else {
    err.message = '连接服务器失败!'
  }
  return Promise.resolve(err);
})

export default service
