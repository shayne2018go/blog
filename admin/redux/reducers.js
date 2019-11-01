import { combineReducers } from 'redux'
import {
  LOGIN,
  USER_INFO
} from './action-types'
const initUser = {
  login: false,
  username: null,
  token: null,
  avatar: null
}

const login = (state = initUser, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

const userInfo = (state = initUser, action) => {
  switch(action.type) {
    case USER_INFO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  login,
  userInfo
})