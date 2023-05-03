import axios from 'axios'
import * as constants from '../constants/userConstants'
import parseJwt from '../../shared/middlewares'

export const getUserList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache',
      },
    }

    const { data } = await axios.get(`/api/users`, config)

    dispatch({ type: constants.USER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.USER_LIST_FAIL,
      message: error.response && error.response.data.message ? error.response.data.message : error.message,
      status: error.response && error.response.status,
    })
  }
}
export const login = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/users/login', loginData, config)

    const decoded = parseJwt(data.token)
    const userSession = {
      ...decoded,
      token: data.token,
    }

    dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: userSession })

    localStorage.setItem('setFMI', JSON.stringify(data.token))
  } catch (error) {
    dispatch({
      type: constants.USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
export const logout = () => async (dispatch) => {
  dispatch({ type: constants.USER_LOGOUT })
}
export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: constants.USER_REGISTER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/users', user, config)

    dispatch({ type: constants.USER_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
export const userUpdateInfo = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/by-admin`, user, config)
    const decoded = parseJwt(data.token)
    dispatch({ type: constants.USER_UPDATE_SUCCESS, payload: decoded })
  } catch (error) {
    dispatch({
      type: constants.USER_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
export const userUpdateMyInfo = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_UPDATE_MY_INFO_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/${user._id}`, user, config)

    const decoded = parseJwt(data.token)

    const userSession = {
      ...decoded,
      token: data.token,
    }

    dispatch({ type: constants.USER_UPDATE_MY_INFO_SUCCESS, payload: userSession })
    dispatch({ type: constants.USER_LOGIN_SUCCESS, payload: userSession })
    localStorage.setItem('setFMI', JSON.stringify(data.token))
  } catch (error) {
    dispatch({
      type: constants.USER_UPDATE_MY_INFO_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
export const registerUserByAdmin = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_REGISTER_BY_ADMIN_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/users/by-admin', user, config)

    dispatch({ type: constants.USER_REGISTER_BY_ADMIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.USER_REGISTER_BY_ADMIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
export const deleteUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.USER_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.delete(`/api/users/${user._id}`, config)

    dispatch({ type: constants.USER_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.USER_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
