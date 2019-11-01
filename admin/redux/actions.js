import { 
  LOGIN,
  USER_INFO
} from './action-types'
import {login, userInfo} from '~api/blog'
import Cookie from 'js-cookie'

export const LoginAction = (paload) => {
  login(paload).then(res => {
    if (res.success) {
      Cookie.set('Authorization', res.token)
      return {
        type: LOGIN,
        paload: {
          token: res.token
        }
      }
    }
  })
}
export const UserInfoAction = (dispatch) => {
  userInfo().then(res => {
    if (res.success) {
      const action =  {
        type: USER_INFO,
        payload: {
          username: res.data.user.username,
          login: true
        }
      }
      dispatch(UserInfoActionSub(action))
    }
  })
}

export const UserInfoActionSub = (action) => {
  return action
}