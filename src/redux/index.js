import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import parseJwt from '../shared/middlewares'

const userInfoFromStorage = localStorage.getItem('setFMI') ? JSON.parse(localStorage.getItem('setFMI')) : null

const decoded = userInfoFromStorage === null ? null : parseJwt(userInfoFromStorage)
const userSession =
  userInfoFromStorage === null
    ? null
    : {
        ...decoded,
        token: userInfoFromStorage,
      }

const initialState = {
  userLogin: {
    userInfo: userSession,
  },
}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
