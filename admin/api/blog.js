import request from './request'

export const login = (data) => {
  return request.post('/blog/admin/login', data)
}

export const userInfo = () => {
  return request.get('/blog/admin/user_info')
}